Search.setIndex({envversion:50,filenames:["api/core/abed.auto","api/core/abed.compress","api/core/abed.conf","api/core/abed.constants","api/core/abed.datasets","api/core/abed.exceptions","api/core/abed.fab","api/core/abed.fab_util","api/core/abed.git","api/core/abed.help","api/core/abed.init","api/core/abed.local","api/core/abed.models","api/core/abed.pbs","api/core/abed.progress","api/core/abed.run","api/core/abed.run_utils","api/core/abed.tasks","api/core/abed.ui","api/core/abed.utils","api/core/abed.zips","api/html/abed.html.common","api/html/abed.html.index","api/html/abed.html.main","api/html/abed.html.metric_tables","api/html/abed.html.rank_graphs","api/html/abed.html.rank_tests","api/html/abed.html.scalar_tables","api/html/abed.html.utils","api/html/abed.html.view","api/results/abed.results.assess","api/results/abed.results.cache","api/results/abed.results.cv_tt","api/results/abed.results.export","api/results/abed.results.main","api/results/abed.results.models","api/results/abed.results.ranks","api/results/abed.results.significance","api/results/abed.results.tables","api/results/abed.results.walk","docs","index"],objects:{"abed.auto":{get_jobid_from_logs:[0,1,1,""],get_jobid_from_pbs:[0,1,1,""],get_remaining:[0,1,1,""],get_starttime:[0,1,1,""],get_state:[0,1,1,""],is_job_marked:[0,1,1,""],mark_job:[0,1,1,""],submitted:[0,1,1,""]},"abed.compress":{compress_dataset:[1,1,1,""],compress_results:[1,1,1,""],dataset_completed:[1,1,1,""]},"abed.conf":{Settings:[2,2,1,""],init_config:[2,1,1,""],parse_dirs:[2,1,1,""]},"abed.constants":{AUTO_FILENAME:[3,3,1,""],CONFIG_FILENAME:[3,3,1,""],DATASET_DIRNAME:[3,3,1,""],EXECS_DIRNAME:[3,3,1,""],TASKS_FILENAME:[3,3,1,""]},"abed.datasets":{dataset_name:[4,1,1,""]},"abed.exceptions":{AbedDatasetdirNotFoundException:[5,4,1,""],AbedExperimentTypeException:[5,4,1,""],AbedHashCollissionException:[5,4,1,""],AbedMethoddirNotFoundException:[5,4,1,""],AbedNonstandardMetricDirection:[5,4,1,""],AbedPBSException:[5,4,1,""],AbedPBSMultipleException:[5,4,1,""]},"abed.fab":{build_remote:[6,1,1,""],deploy:[6,1,1,""],fab_pull:[6,1,1,""],fab_push:[6,1,1,""],fab_repull:[6,1,1,""],fab_setup:[6,1,1,""],get_files_from_glob:[6,1,1,""],get_results:[6,1,1,""],init_data:[6,1,1,""],move_data:[6,1,1,""],setup:[6,1,1,""],write_and_queue:[6,1,1,""]},"abed.fab_util":{MyFabric:[7,2,1,""]},"abed.fab_util.MyFabric":{get:[7,5,1,""],put:[7,5,1,""],run:[7,5,1,""]},"abed.git":{git_add_auto:[8,1,1,""],git_add_tbd:[8,1,1,""],git_commit_auto:[8,1,1,""],git_commit_tbd:[8,1,1,""],git_init:[8,1,1,""],git_ok:[8,1,1,""]},"abed.help":{bold:[9,1,1,""],cmd_strings:[9,1,1,""],get_help:[9,1,1,""],get_topic_help:[9,1,1,""],paragraph_wrapper:[9,1,1,""]},"abed.html":{common:[21,0,0,"-"],index:[22,0,0,"-"],main:[23,0,0,"-"],metric_tables:[24,0,0,"-"],rank_graphs:[25,0,0,"-"],rank_tests:[26,0,0,"-"],scalar_tables:[27,0,0,"-"],utils:[28,0,0,"-"],view:[29,0,0,"-"]},"abed.html.common":{bootstrap_radio_btn:[21,1,1,""],bootstrap_radio_group:[21,1,1,""],generate_buttons:[21,1,1,""],navbar:[21,1,1,""],navbar_content:[21,1,1,""]},"abed.html.index":{create_index_html:[22,1,1,""],generate_index_html:[22,1,1,""],get_status_perc:[22,1,1,""],write_index_html:[22,1,1,""]},"abed.html.main":{generate_html:[23,1,1,""]},"abed.html.metric_tables":{create_metric_tables_html:[24,1,1,""],generate_tables_html:[24,1,1,""],get_table_id:[24,1,1,""],write_tables_html:[24,1,1,""]},"abed.html.rank_graphs":{create_rank_graphs_html:[25,1,1,""],generate_graphs_html:[25,1,1,""],get_table_id:[25,1,1,""],write_table_json:[25,1,1,""],write_tables_html:[25,1,1,""]},"abed.html.rank_tests":{create_rt_html:[26,1,1,""],generate_label_panel:[26,1,1,""],generate_rt_html:[26,1,1,""],write_tables_html:[26,1,1,""]},"abed.html.scalar_tables":{create_scalar_tables_html:[27,1,1,""],generate_tables_html:[27,1,1,""],get_table_id:[27,1,1,""],write_tables_html:[27,1,1,""]},"abed.html.utils":{AbedHTMLTypes:[28,2,1,""],copy_auxiliary_files:[28,1,1,""],copy_data_file:[28,1,1,""],get_data_path:[28,1,1,""]},"abed.html.utils.AbedHTMLTypes":{HISTOGRAMS:[28,6,1,""],INDEX:[28,6,1,""],METRIC_TABLES:[28,6,1,""],PROFILE_PLOTS:[28,6,1,""],RANK_GRAPHS:[28,6,1,""],RANK_TESTS:[28,6,1,""],SCALAR_TABLES:[28,6,1,""],types:[28,6,1,""]},"abed.html.view":{view_html:[29,1,1,""]},"abed.init":{init_config:[10,1,1,""]},"abed.local":{copy_local_files:[11,1,1,""]},"abed.models":{Abed:[12,2,1,""]},"abed.models.Abed":{auto:[12,5,1,""],commands:[12,6,1,""],compress_results:[12,5,1,""],explain_all_tasks:[12,5,1,""],explain_tbd_tasks:[12,5,1,""],init:[12,5,1,""],init_tasks:[12,5,1,""],local:[12,5,1,""],parse_results:[12,5,1,""],process_zips:[12,5,1,""],pull:[12,5,1,""],push:[12,5,1,""],reload_tasks:[12,5,1,""],repull:[12,5,1,""],run:[12,5,1,""],setup:[12,5,1,""],status:[12,5,1,""],update_tasks:[12,5,1,""],view_results:[12,5,1,""],write_tasks:[12,5,1,""]},"abed.pbs":{generate_pbs_text:[13,1,1,""],sec2str:[13,1,1,""]},"abed.progress":{enum_progress:[14,1,1,""],iter_progress:[14,1,1,""]},"abed.results":{"export":[33,0,0,"-"],assess:[30,0,0,"-"],cache:[31,0,0,"-"],cv_tt:[32,0,0,"-"],main:[34,0,0,"-"],models:[35,0,0,"-"],ranks:[36,0,0,"-"],significance:[37,0,0,"-"],tables:[38,0,0,"-"],walk:[39,0,0,"-"]},"abed.results.assess":{assess_build_tables_metric:[30,1,1,""],assess_make_tables_metric:[30,1,1,""],assess_tables:[30,1,1,""]},"abed.results.cache":{find_label:[31,1,1,""],init_result_cache:[31,1,1,""],parse_result_fileobj:[31,1,1,""],update_result_cache:[31,1,1,""]},"abed.results.cv_tt":{cvtt_build_tables_metric:[32,1,1,""],cvtt_make_tables_metric:[32,1,1,""],cvtt_tables:[32,1,1,""],filter_targets:[32,1,1,""]},"abed.results.export":{export_tables:[33,1,1,""],get_table_fname:[33,1,1,""],merge_description_table:[33,1,1,""],write_table_ajax:[33,1,1,""],write_table_txt:[33,1,1,""]},"abed.results.main":{make_results:[34,1,1,""]},"abed.results.models":{AbedCache:[35,2,1,""],AbedResult:[35,2,1,""],AbedTable:[35,2,1,""],AbedTableTypes:[35,2,1,""]},"abed.results.models.AbedCache":{add_result:[35,5,1,""],dump:[35,5,1,""],get_metric_values_dm:[35,5,1,""],get_scalar_values_dm:[35,5,1,""],has_result:[35,5,1,""],iter_results_dm:[35,5,1,""],load:[35,5,1,""]},"abed.results.models.AbedResult":{add_result_metric:[35,5,1,""],add_result_scalar:[35,5,1,""],get_result:[35,5,1,""]},"abed.results.models.AbedTable":{add_row:[35,5,1,""],from_csv:[35,5,1,""],left_insert:[35,5,1,""],summary_table:[35,5,1,""],table_averages:[35,5,1,""],table_losses:[35,5,1,""],table_ties:[35,5,1,""],table_wins:[35,5,1,""]},"abed.results.models.AbedTableTypes":{RANKS:[35,6,1,""],VALUES:[35,6,1,""]},"abed.results.ranks":{get_ranks:[36,1,1,""],make_rank_table:[36,1,1,""]},"abed.results.significance":{global_difference:[37,1,1,""],reference_difference:[37,1,1,""]},"abed.results.tables":{build_tables_scalar:[38,1,1,""],make_tables_scalar:[38,1,1,""]},"abed.results.walk":{files_w_dataset:[39,1,1,""],files_w_dset_and_method:[39,1,1,""],files_w_method:[39,1,1,""],walk_archive:[39,1,1,""],walk_archive_hashes:[39,1,1,""],walk_dir_hashes:[39,1,1,""],walk_directory:[39,1,1,""],walk_for_cache:[39,1,1,""],walk_hashes:[39,1,1,""],walk_tar:[39,1,1,""]},"abed.run":{Work:[15,2,1,""],copy_worker:[15,1,1,""],do_work:[15,1,1,""],master:[15,1,1,""],mpi_start:[15,1,1,""],mpi_start_local:[15,1,1,""],mpi_start_remote:[15,1,1,""],worker:[15,1,1,""]},"abed.run.Work":{get_chunk:[15,5,1,""],get_next_item:[15,5,1,""],isempty:[15,5,1,""],send_at_once:[15,6,1,""]},"abed.run_utils":{get_output_dir:[16,1,1,""],get_scratchdir:[16,1,1,""],write_output:[16,1,1,""]},"abed.tasks":{cartesian:[17,1,1,""],check_size:[17,1,1,""],explain_tasks:[17,1,1,""],init_tasks:[17,1,1,""],init_tasks_assess:[17,1,1,""],init_tasks_cv_tt:[17,1,1,""],init_tasks_raw:[17,1,1,""],read_tasks:[17,1,1,""],task_hash:[17,1,1,""],update_tasks:[17,1,1,""]},"abed.ui":{main:[18,1,1,""],parse_arguments:[18,1,1,""],parse_command:[18,1,1,""]},"abed.utils":{clean_str:[19,1,1,""],colorprint:[19,1,1,""],error:[19,1,1,""],hash_from_filename:[19,1,1,""],info:[19,1,1,""],mkdir:[19,1,1,""],touch:[19,1,1,""],warning:[19,1,1,""],wrap_text:[19,1,1,""]},"abed.zips":{clean_empty_dir:[20,1,1,""],move_results:[20,1,1,""],unpack_zips:[20,1,1,""]},abed:{auto:[0,0,0,"-"],compress:[1,0,0,"-"],conf:[2,0,0,"-"],constants:[3,0,0,"-"],datasets:[4,0,0,"-"],exceptions:[5,0,0,"-"],fab:[6,0,0,"-"],fab_util:[7,0,0,"-"],git:[8,0,0,"-"],help:[9,0,0,"-"],init:[10,0,0,"-"],local:[11,0,0,"-"],models:[12,0,0,"-"],pbs:[13,0,0,"-"],progress:[14,0,0,"-"],run:[15,0,0,"-"],run_utils:[16,0,0,"-"],tasks:[17,0,0,"-"],ui:[18,0,0,"-"],utils:[19,0,0,"-"],zips:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","data","Python data"],"4":["py","exception","Python exception"],"5":["py","method","Python method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:data","4":"py:exception","5":"py:method","6":"py:attribute"},terms:{"break":41,"case":[0,1,13],"class":[2,7],"default":3,"function":[0,1,6,8],"new":[0,40],"return":[0,1],"true":[0,18,19,32],"try":[0,1],_id:[21,35],_io:19,_type:33,abed:[0,1,3],abed_auto:3,abed_cach:[30,32,38],abed_conf:3,abed_task:3,abedcach:35,abeddatasetdirnotfoundexcept:5,abedexperimenttypeexcept:5,abedhashcollissionexcept:5,abedhtmltyp:28,abedmethoddirnotfoundexcept:5,abednonstandardmetricdirect:5,abedpbsexcept:5,abedpbsmultipleexcept:[0,5],abedresult:35,abedtabl:35,abedtabletyp:35,abil:0,about:41,activ:21,actual:1,add_result:35,add_result_metr:35,add_result_scalar:35,add_row:35,algorithm:[1,41],all:[1,9,17,21,32,39,41],all_task:17,all_text:9,all_work:15,also:[0,41],analyz:40,ani:[0,41],append:0,assess_build_tables_metr:30,assess_make_tables_metr:30,assess_t:30,asset:28,assum:[0,1,36],attempt:0,attribut:21,auto:[0,3,12],auto_filename:3,autogener:40,autom:[0,41],avail:[0,1,13],availabl:19,avoid:0,bar:14,base:[2,5,7,12,15,28,35],basepath:6,basic:[31,40],batch1:0,batchexperi:41,becaus:20,been:[0,40],befor:0,benchmark:41,better:36,between:[21,31,37],beyond:40,blue:19,bold:9,bool:[0,1],bootstrap:22,bootstrap_radio_btn:21,bootstrap_radio_group:21,btndef:21,build:6,build_remot:6,build_tables_scalar:38,bz2:20,bz2file:20,bzip2:1,cach:[31,35],cachefil:35,call:1,can:[0,1,36,40,41],care:41,cartesian:17,cell:32,check:[0,1],check_siz:17,classifi:37,clean_empty_dir:20,clean_str:19,cluster:41,cmd:9,cmd_string:9,code:19,collect:1,color:19,color_wrap:19,colorprint:19,colour:19,column:32,combin:[17,32],command:[0,1,6,7,9,12,13],common:21,compar:40,compil:6,complet:[1,40],compress_dataset:1,compress_result:[1,12],compression:1,comput:41,conf:2,config:[2,3,10],config_filename:3,configur:1,contain:[0,9],convert:0,copi:28,copy_auxiliary_fil:28,copy_data_fil:28,copy_local_fil:11,copy_work:15,core:[40,41],correspond:1,cover:40,creat:[0,10,20,31,32,40,41],create_index_html:22,create_metric_tables_html:24,create_rank_graphs_html:25,create_rt_html:26,create_scalar_tables_html:27,cross:[32,40],csvfile:35,current:0,custom:40,cvtt_build_tables_metr:32,cvtt_make_tables_metr:32,cvtt_tabl:32,data:6,dataset:[1,3],dataset_complet:1,dataset_dirname:3,dataset_nam:4,datat:41,date:0,datetim:0,deal:8,defin:[1,40],depend:[1,13,20],deploi:6,design:[40,41],desir:41,dest:7,dest_dir:6,dict:1,dictionari:31,differ:37,directori:[0,1,3],disk:1,displai:9,do_work:15,doc:[22,24,25,26,27],docstr:40,document:[0,9],doe:[0,1,20],doesn:[0,1,41],done:[0,1,20,32],dset:[1,4,39],dsetfil:1,dump:35,dutch:41,each:[0,1,31,32,40],earliest:0,either:[1,41],element:17,encod:19,end:[0,19],entri:2,enum_progress:14,env:7,error:[0,1,19],etc:7,evalu:37,exact:0,exampl:40,excel:41,except:[0,5],exec:3,execs_dirname:3,execut:[3,15,40],exist:[0,1,32],exit:1,expect:[0,32],experi:[1,32,40,41],experiment:[40,41],explain_all_task:12,explain_task:17,explain_tbd_task:12,export_t:33,ext:33,extens:19,extern:1,extract:0,fab:6,fab_pul:6,fab_push:6,fab_repul:6,fab_setup:6,fab_util:7,fals:[0,6,7,12,15,16,21,31,33,34],featur:[40,41],fid:31,file:[0,1,3,10,13,19,20,22],filenam:[0,1,3,19],filepath:28,files_w_dataset:39,files_w_dset_and_method:39,files_w_method:39,filter_target:32,find:0,find_label:31,finish:[0,1],first:[0,32],fix:19,fname:[19,39],fold:32,folder:[1,20],follow:[32,40],form:0,format:0,found:[0,40],fraction:36,from:[0,1,6],from_csv:35,full:32,gener:1,generate_button:21,generate_graphs_html:25,generate_html:23,generate_index_html:22,generate_label_panel:26,generate_pbs_text:13,generate_rt_html:26,generate_tables_html:[24,27],get:[0,7,36],get_chunk:15,get_data_path:28,get_files_from_glob:6,get_help:9,get_jobid_from_log:0,get_jobid_from_pb:0,get_metric_values_dm:35,get_next_item:15,get_output_dir:16,get_rank:36,get_remain:0,get_result:[6,35],get_scalar_values_dm:35,get_scratchdir:16,get_starttim:0,get_stat:0,get_status_perc:22,get_table_fnam:33,get_table_id:[24,25,27],get_topic_help:9,git_add_auto:8,git_add_tbd:8,git_commit_auto:8,git_commit_tbd:8,git_init:8,git_ok:8,give:40,given:[0,1,32],glob:6,glob_path:6,global_differ:37,gree:19,gzip:1,handl:20,has_result:35,hash:[1,17,31],hash_from_filenam:19,hassl:41,have:0,here:40,high:36,highest:1,histogram:28,histograms:28,hold:[32,35],holm:37,home:[21,28],hopefulli:41,how:40,howev:1,hsh:[15,16,31,35],http:29,includ:41,include:28,indent:9,index:21,indic:32,info:19,inform:40,init:[10,12],init_config:[2,10],init_data:6,init_result_cach:31,init_task:[1,12,17],init_tasks_assess:17,init_tasks_cv_tt:17,init_tasks_raw:17,installat:40,instanc:[1,21],intern:40,invert:36,is_job_mark:0,is_summari:33,isempti:15,iter:[1,14],iter_progress:14,iter_results_dm:35,jobid:[0,12],jobnam:0,kei:2,know:[0,31],label:[14,21,32,35],languag:41,last:0,launch:29,lbl:26,lbl_tabl:26,learn:41,left_insert:35,len:36,length:19,level:1,line:[0,9],link:40,lisa:[0,13,41],list:[1,17],log:0,logpath:0,look:0,lower:36,lzma:1,machin:41,made:[0,32],mai:0,make:32,make_rank_t:36,make_result:34,make_tables_scalar:38,map:1,mark:0,mark_job:0,matur:41,max_length:19,measur:32,merge_description_t:33,method:[31,32,35,37,39,40,41],metric_label:30,metric_t:[24,28],metric_tables:28,metricnam:[30,35],mkdir:19,mode:[1,19],model:[12,32,35,40],modul:[0,1,9,13],moment:41,more:[0,41],move:6,move_data:6,move_result:20,mpi_start:15,mpi_start_loc:15,mpi_start_remot:15,much:[1,41],multipl:[20,41],must:[13,32],myfabr:7,n_worker:15,name:[0,1,3,19,21],navbar:21,navbar_cont:21,nds:0,necessari:[28,41],need:[0,1,9,20],nest:40,next:1,none:[0,6,7,12,19,35],note:[1,13],number:36,object:[0,2,7,12,15,28,35],occur:[0,1],offlin:41,onli:1,oper:41,optim:32,option:0,other:[32,35],otherwis:0,out:[0,32],output:[0,16,19,40,41],over:1,overview:40,packag:[1,20,41],page:21,paragraph_wrapp:9,param:17,paramet:[0,1,32,40,41],parse_argu:18,parse_command:18,parse_dir:2,parse_result:12,parse_result_fileobj:31,path:[0,19],pbs:0,pbzip2:20,perform:32,period:0,place:0,platform:1,plot:28,plugin:41,posix:1,possibl:[0,1,32],predict:32,prettier:19,previou:[0,6],print:[1,19],procedur:37,process:41,process_zip:12,profil:28,profile_plot:28,profile_plots:28,program:[0,1,6,40],progress:14,project:[40,41],proper:41,provid:0,pull:[0,12],purpl:19,push:[6,12],push_data:6,put:7,python:[1,19,20],qstat:0,queu:0,queuenam:0,quiet:16,rais:[0,1],ramin:0,rank_graph:[25,28],rank_graphs:28,rank_test:[26,28],rank_tests:28,ranks:35,raw:[1,40],read_task:17,record:0,red:19,refer:37,reference_differ:37,regress:40,relat:1,releas:[0,6],reload_task:12,remain:0,remot:[0,6],remote_dir:0,remov:[1,41],repul:[0,12],request:1,requir:[6,40],result:0,result_dir:16,retriev:0,row:35,run:[0,1,6,7],run_util:16,runtim:0,save:1,scalar_t:[27,28],scalar_tables:28,scalarnam:[35,38],script:40,search:0,sec2str:13,second:[13,32],see:[0,40,41],send_at_onc:15,sep:19,separ:[13,20],server:[0,6,29,40],servic:0,sessid:0,set:[1,2,40,41],setup:[6,12,40,41],share:21,shell:19,should:[1,32],shown:32,showstart:0,similar:[0,41],simpl:[29,41],simpli:19,simul:40,simultan:0,singl:[32,41],site:40,skeleton:10,skip_cach:[12,31,34],skip_init:12,some:13,sourc:[0,1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39],space:1,spars:1,specif:32,specifi:[0,1],start:[0,29,40],starttim:0,state:0,statu:12,stdout:19,step:20,storag:1,store:1,str:[0,1],stream:20,string:[0,1,19],submit:0,summary_t:[33,35],supercomput:41,support:[1,19,41],system:41,systemexit:1,tabid:25,tabl:[21,23],table_averag:35,table_loss:35,table_ti:35,table_win:35,tar:[1,20,39],tarfil:[1,20],target:[30,32],task:[0,1,15],task_dict:[1,15,20,22,23,31,34],task_hash:17,tasks_filename:3,tasksfil:3,tbd:41,tediou:41,test_metr:32,text:[0,9,19],textiowrapp:19,than:[0,32],theoret:32,therefor:1,thi:[0,1,9,13,17,22,29,32,34,36,40],through:[0,1],throughout:19,thrown:0,thu:[0,20],time:[0,19],timedelta:0,timeout:13,topic:9,torqu:41,touch:19,train:32,train_metr:32,tri:0,tsk:0,tupl:1,two:20,txt:[3,19,41],type:[0,1,28,30,32,40],understand:40,unknown:1,unpack:20,unpack_zip:20,unsupport:1,update_result_cach:31,update_task:[12,17],usag:40,user:1,usernam:0,using:40,utf:19,valid:[32,40],valu:[21,32,35],values:35,variou:19,vector:36,veri:41,view:29,view_html:29,view_result:12,wai:41,walk:39,walk_arch:39,walk_archive_hash:39,walk_dir_hash:39,walk_directori:39,walk_for_cach:39,walk_hash:39,walk_tar:39,walltim:0,want:31,warn:19,warn_onli:7,were:[1,32],what:40,when:[0,1,32],where:41,whether:[0,1],which:[0,1,19,20,32,40,41],width:9,with_help:18,word:19,wrap:19,wrap_text:19,write:40,write_and_queu:6,write_index_html:22,write_output:16,write_table_ajax:33,write_table_json:25,write_table_txt:33,write_tables_html:[24,25,26,27],write_task:12,written:41,y_test:32,y_test_pr:32,y_test_tru:32,y_train:32,y_train_pr:32,y_train_tru:32,yellow:19,yield:17,you:36,zip:20},titles:["Automatic Job Management","Result Compression","Configuration Loading","Constants","Dataset Utilities","Exceptions","Communication through Fabric","Utilities for working with Fabric","Working with Git","Help functionality","Initialization of Abed","Running jobs locally","Main Abed class","Working with PBS","Progressbar wrappers","Master-worker module","Master-worker utilities","Managing Tasks","Command line user interface","General Utility functions","Dealing with result archives","Commonly used HTML elements","Generating the index page","Main entrypoint to generate HTML","Generate pages with metric tables","Generate pages with rank graphs","Generate pages with rank tests","Generate pages with scalar tables","Utility functions for HTML generation","Open generated HTML in browser","Generate result tables for assess mode","Functions for parsing the result files","Generate result tables for cv_tt mode","Functions for exporting tables","Main entrypoint to generate results","Class definitions used for parsing results","Functions for generating Rank Tables","Testing statistical significance","Building scalar tables","Functions for iterating over results","Welcome to Abed&#8217;s documentation!","Welcome to Abed!"],titleterms:{"class":[12,35],"export":33,"function":[9,19,28,31,33,36,39],abed:[10,12,40,41],api:40,archiv:20,assess:30,automat:0,browser:29,build:38,command:18,commonli:21,commun:6,compress:1,configur:2,constant:3,cv_tt:32,dataset:4,deal:20,definit:35,document:[40,41],element:21,entrypoint:[23,34],exception:5,fabric:[6,7],file:31,gener:[19,22,23,24,25,26,27,28,29,30,32,34,36],git:8,graph:25,help:9,html:[21,23,28,29],index:22,initial:10,interfac:18,iter:39,job:[0,11],line:18,load:2,local:11,main:[12,23,34],manag:[0,17],master:[15,16],metric:24,mode:[30,32],modul:15,note:41,open:29,over:39,page:[22,24,25,26,27],pars:[31,35],pbs:13,progressbar:14,rank:[25,26,36],result:[1,20,30,31,32,34,35,39],run:11,scalar:[27,38],screenshot:41,signific:37,statist:37,tabl:[24,27,30,32,33,36,38],task:17,test:[26,37],through:6,tutori:40,usage:40,user:18,util:16,utiliti:[4,7,19,28],welcom:[40,41],work:[7,8,13],worker:[15,16],wrapper:14}})