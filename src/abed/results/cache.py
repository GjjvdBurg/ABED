"""
Functions for creating the result cache.

The result cache is basically a dictionary between the hashes and the metrics 
that we want to know for each hash.
"""

from abed.conf import settings
from abed.results.models import AbedCache, AbedResult
from abed.results.walk import walk_results
from abed.utils import info, hash_from_filename

def find_label(line):
    for scalar in settings.SCALARS:
        if scalar in line:
            return scalar
    return '_'.join(line.split(' ')[1].split('_')[:-1])

def parse_result_file(filepath, dataset, method):
    data = {}
    fid = open(filepath, 'r')
    label = None
    for line in fid:
        l = line.strip()
        if l.startswith('%'):
            label = find_label(l)
            if label in settings.SCALARS:
                data[label] = None
            else:
                data[label] = {'true': [], 'pred': []}
            continue
        if label in settings.SCALARS:
            data[label] = float(l)
        else:
            true, pred = l.split('\t')
            data[label]['true'].append(float(true))
            data[label]['pred'].append(float(pred))
    fid.close()

    hsh = hash_from_filename(filepath)
    ar = AbedResult(hsh, dataset=dataset, method=method)

    for label in data.iterkeys():
        if label in settings.SCALARS:
            ar.add_result_scalar(label, data[label])
        else:
            for metric in settings.METRICS:
                metric_func = settings.METRICS[metric]['metric']
                ar.add_result_metric(label, metric, 
                        metric_func(data[label]['true'], data[label]['pred']))
    return ar

def init_result_cache(task_dict):
    ac = AbedCache(methods=settings.METHODS, datasets=settings.DATASETS, 
            metrics=settings.METRICS, scalars=settings.SCALARS)
    info("Starting cache generation")
    for dataset, method, files in walk_results():
        for f in files:
            result = parse_result_file(f, dataset, method)
            ac.add_result(result)
    ac.dump()
    return ac

def update_result_cache(task_dict):
    ac = AbedCache()
    try:
        ac.load()
    except IOError:
        info("Result cache non-existent, generating it.")
        ac = init_result_cache(task_dict)
        return ac
    # updating the result cache is done in two steps:
    # 1. Check if new metrics or scalars are added, if so regenerate everything
    # 2. Check if new result files are added, if that's the case only generate 
    # those
    conf_metrics = set(settings.METRICS.keys())
    cache_metrics = ac.metrics
    diff = conf_metrics - cache_metrics
    if len(diff) > 0:
        ac = init_result_cache(task_dict)
        return ac
    for dataset, method, files in walk_results():
        for f in files:
            hsh = hash_from_filename(f)
            if not ac.has_result(hsh):
                result = parse_result_file(f, dataset, method)
                ac.add_result(result)
    ac.dump()
    return ac
