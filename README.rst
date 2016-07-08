================
Welcome to Abed!
================

Abed is an automated system for benchmarking machine learning algorithms. It 
is created for running experiments where it is desired to run multiple methods 
on multiple datasets using multiple parameters. It includes automated 
processing of result files into result tables. Abed was designed for use 
with the Dutch LISA supercomputer, but can hopefully be used on any Torque 
compute cluster.

Abed was created as a way to automate all the tedious work necessary to set 
up proper benchmarking experiments. It also removes much of the hassle by 
using a single configuration file for the experimental setup. A core feature 
of Abed is that it doesn't care about which language the tested methods are 
written in.

Abed can create output tables as either simple txt files, or as html pages 
using the excellent `DataTables <https://datatables.net/>`_ plugin. To support 
offline operation the necessary DataTables files are packaged with Abed.

Documentation
-------------

For Abed's documentation, see `the documentation 
<https://gjjvdburg.github.io/ABED/docs.html>`_.

Screenshots
-----------
Tbd.

Notes
-----

Abed is very much a work in process and functionality can break at any moment.  
For a similar and more mature project which works with R see: 
`BatchExperiments <https://github.com/tudo-r/BatchExperiments>`_.