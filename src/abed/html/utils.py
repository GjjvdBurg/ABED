"""
Utility functions for generating html. Includes functions for copying necessary 
assets.
"""

import os
import shutil

import abed

from abed.conf import settings
from abed.utils import mkdir

class AbedHTMLTypes:
    INDEX = ('Home', 'index.html')
    METRIC_TABLES = ('Metric Tables', 'metric_tables.html')
    SCALAR_TABLES = ('Scalar Tables', 'scalar_tables.html')
    GRAPHS = ('Graphs', 'graphs.html')
    types = [INDEX, METRIC_TABLES, SCALAR_TABLES, GRAPHS]

def get_data_path(filepath):
    packagedir = abed.__path__[0]
    dirname = os.path.join(os.path.dirname(packagedir), 'share', 'data')
    fullname = os.path.join(dirname, filepath)
    fullpath = os.path.abspath(fullname)
    return fullpath

def copy_data_file(filepath):
    src = get_data_path(filepath)
    datapath = os.path.join('assets', filepath)
    dest = os.path.join(settings.OUTPUT_DIR, 'html', datapath)
    destdir = os.path.dirname(dest)
    mkdir(destdir)
    shutil.copy(src, dest)
    return datapath

def copy_auxiliary_files():
    copy_data_file('DataTables-1.10.7/media/images/favicon.ico')
    copy_data_file('DataTables-1.10.7/media/images/sort_both.png')
    copy_data_file('DataTables-1.10.7/media/images/sort_asc.png')
    copy_data_file('DataTables-1.10.7/media/images/sort_asc_disabled.png')
    copy_data_file('DataTables-1.10.7/media/images/sort_desc.png')
    copy_data_file('DataTables-1.10.7/media/images/sort_desc_disabled.png')
    copy_data_file('DataTables-1.10.7/media/images/Sorting icons.psd')


