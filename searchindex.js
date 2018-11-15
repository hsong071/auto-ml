Search.setIndex({docnames:["automl","automl.bayesianoptimizationpiepeline","automl.createconfigspacepipeline","automl.datahandler","automl.discovery","automl.errors","automl.metalearning","automl.metalearning.database","automl.metalearning.metafeatures","automl.utl","contribute","howto","index","install","modules","nutshell","python"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,sphinx:55},filenames:["automl.rst","automl.bayesianoptimizationpiepeline.rst","automl.createconfigspacepipeline.rst","automl.datahandler.rst","automl.discovery.rst","automl.errors.rst","automl.metalearning.rst","automl.metalearning.database.rst","automl.metalearning.metafeatures.rst","automl.utl.rst","contribute.rst","howto.rst","index.rst","install.rst","modules.rst","nutshell.rst","python.rst"],objects:{"":{automl:[0,0,0,"-"]},"automl.bayesianoptimizationpiepeline":{base:[1,0,0,"-"]},"automl.bayesianoptimizationpiepeline.base":{BayesianOptimizationPipeline:[1,2,1,""]},"automl.bayesianoptimizationpiepeline.base.BayesianOptimizationPipeline":{get_optimized_pipeline:[1,3,1,""],get_optimized_score:[1,3,1,""],optimize_pipeline:[1,3,1,""]},"automl.createconfigspacepipeline":{base:[2,0,0,"-"]},"automl.createconfigspacepipeline.base":{ConfigSpacePipeline:[2,2,1,""]},"automl.createconfigspacepipeline.base.ConfigSpacePipeline":{get_config_space:[2,3,1,""]},"automl.datahandler":{dataloader:[3,0,0,"-"]},"automl.datahandler.dataloader":{DataLoader:[3,2,1,""],Dataset:[3,2,1,""]},"automl.datahandler.dataloader.DataLoader":{get_openml_dataset:[3,4,1,""]},"automl.datahandler.dataloader.Dataset":{X:[3,5,1,""],categorical_indicators:[3,5,1,""],dataset_id:[3,5,1,""],is_classification_problem:[3,3,1,""],is_regression_problem:[3,3,1,""],is_sparse:[3,3,1,""],metafeatures_vector:[3,3,1,""],n_features:[3,5,1,""],n_labels:[3,5,1,""],problem_type:[3,5,1,""],train_test_split:[3,3,1,""],y:[3,5,1,""]},"automl.discovery":{assistant:[4,0,0,"-"],pipeline_generation:[4,0,0,"-"]},"automl.discovery.assistant":{Assistant:[4,2,1,""]},"automl.discovery.assistant.Assistant":{compute_similar_datasets:[4,3,1,""],dataset:[4,5,1,""],evaluation_metric:[4,5,1,""],generate_pipeline:[4,3,1,""],metafeatures:[4,5,1,""],metalearning_metric:[4,5,1,""],optimize:[4,3,1,""],reduced_search_space:[4,5,1,""],similar_datasets:[4,5,1,""]},"automl.discovery.pipeline_generation":{PipelineDiscovery:[4,2,1,""]},"automl.discovery.pipeline_generation.PipelineDiscovery":{dataset:[4,5,1,""],discover:[4,3,1,""],pipeline:[4,5,1,""],save_pipeline:[4,3,1,""],score:[4,3,1,""],search_space:[4,5,1,""],tpot_object:[4,5,1,""],validation_score:[4,5,1,""]},"automl.errors":{customerrors:[5,0,0,"-"]},"automl.errors.customerrors":{AutoMLError:[5,6,1,""],AutoMLTestError:[5,6,1,""],CurrentlyNonSupportedError:[5,6,1,""]},"automl.errors.customerrors.AutoMLError":{msg:[5,5,1,""]},"automl.errors.customerrors.AutoMLTestError":{msg:[5,5,1,""],test_name:[5,5,1,""]},"automl.errors.customerrors.CurrentlyNonSupportedError":{msg:[5,5,1,""]},"automl.globalvars":{LOGGER_IDENTIFIER:[0,7,1,""]},"automl.metalearning":{ALGORUNS_CSV_NAME:[6,7,1,""],CONFIGURATIONS_CSV_NAME:[6,7,1,""],database:[7,0,0,"-"],metafeatures:[8,0,0,"-"]},"automl.metalearning.database":{configurations_parsing:[7,0,0,"-"],load_db:[7,0,0,"-"]},"automl.metalearning.database.configurations_parsing":{ConfigurationBuilder:[7,2,1,""],MLSuggestion:[7,2,1,""],mix_suggestions:[7,1,1,""]},"automl.metalearning.database.configurations_parsing.ConfigurationBuilder":{build_configuration:[7,3,1,""],model_row:[7,5,1,""]},"automl.metalearning.database.configurations_parsing.MLSuggestion":{add_classifier:[7,3,1,""],add_encoder:[7,3,1,""],add_imputation:[7,3,1,""],add_preprocessor:[7,3,1,""],add_rescaler:[7,3,1,""],classifier:[7,5,1,""],classifiers:[7,5,1,""],encoder:[7,5,1,""],encoders:[7,5,1,""],get_all_elements:[7,3,1,""],imputation:[7,5,1,""],imputations:[7,5,1,""],preprocessor:[7,5,1,""],preprocessors:[7,5,1,""],rescaler:[7,5,1,""],rescalers:[7,5,1,""]},"automl.metalearning.database.load_db":{AlgorithmRunsFile:[7,2,1,""],ConfigurationsFile:[7,2,1,""],LandmarkModelParser:[7,2,1,""],MKDatabaseClient:[7,2,1,""],MetaKnowledge:[7,2,1,""]},"automl.metalearning.database.load_db.AlgorithmRunsFile":{get_associated_configuration_id:[7,3,1,""],get_associated_configuration_ids:[7,3,1,""],instance_id:[7,5,1,""],instances_ids:[7,5,1,""]},"automl.metalearning.database.load_db.ConfigurationsFile":{algorithm_id:[7,5,1,""],algorithm_ids:[7,5,1,""],get_configuration:[7,3,1,""],get_configurations:[7,3,1,""]},"automl.metalearning.database.load_db.LandmarkModelParser":{dataset:[7,5,1,""],instances_ids:[7,5,1,""],metric:[7,5,1,""],metrics_available:[7,4,1,""],models_by_metric:[7,4,1,""]},"automl.metalearning.database.load_db.MKDatabaseClient":{dataset:[7,5,1,""],distance_metric:[7,5,1,""],get_metaknowledge_space:[7,3,1,""],ids_list:[7,5,1,""],k:[7,5,1,""],meta_suggestions:[7,3,1,""],metric:[7,5,1,""],nearest_datasets:[7,3,1,""],reload:[7,3,1,""],weighted:[7,5,1,""]},"automl.metalearning.database.load_db.MetaKnowledge":{load_datasets_info:[7,3,1,""],simple_matrix:[7,3,1,""],weighted_matrix:[7,3,1,""]},"automl.metalearning.metafeatures":{computation:[8,0,0,"-"],metafeatures_interaction:[8,0,0,"-"]},"automl.metalearning.metafeatures.computation":{StatisticalInformation:[8,2,1,""]},"automl.metalearning.metafeatures.computation.StatisticalInformation":{class_entropy:[8,4,1,""],class_ocurrences:[8,4,1,""],class_probability_max:[8,4,1,""],class_probability_mean:[8,4,1,""],class_probability_min:[8,4,1,""],class_probability_std:[8,4,1,""],dataset_ratio:[8,4,1,""],inverse_dataset_ratio:[8,4,1,""],kurtosis_max:[8,4,1,""],kurtosis_mean:[8,4,1,""],kurtosis_min:[8,4,1,""],kurtosis_std:[8,4,1,""],kurtosisses:[8,4,1,""],landmark_1NN:[8,4,1,""],landmark_decision_node_learner:[8,4,1,""],landmark_decision_tree:[8,4,1,""],landmark_lda:[8,4,1,""],landmark_naive_bayes:[8,4,1,""],landmark_random_node_learner:[8,4,1,""],log_dataset_ratio:[8,4,1,""],log_inverse_dataset_ratio:[8,4,1,""],log_number_of_features:[8,4,1,""],log_number_of_instances:[8,4,1,""],missing_values:[8,4,1,""],number_of_categorical_features:[8,4,1,""],number_of_classes:[8,4,1,""],number_of_features:[8,4,1,""],number_of_features_with_na:[8,4,1,""],number_of_instances:[8,4,1,""],number_of_instances_with_na:[8,4,1,""],number_of_missing_values:[8,4,1,""],number_of_numeric_features:[8,4,1,""],number_of_symbols:[8,4,1,""],pca:[8,4,1,""],pca_fraction_components_95v:[8,4,1,""],pca_kurtosis_first_pc:[8,4,1,""],pca_skewness_first_pc:[8,4,1,""],percentage_of_features_with_na:[8,4,1,""],percentage_of_instances_with_na:[8,4,1,""],percentage_of_missing_values:[8,4,1,""],ratio_nominal_numerical:[8,4,1,""],ratio_numerical_nominal:[8,4,1,""],skewness_max:[8,4,1,""],skewness_mean:[8,4,1,""],skewness_min:[8,4,1,""],skewness_std:[8,4,1,""],skewnesses:[8,4,1,""],symbols_max:[8,4,1,""],symbols_mean:[8,4,1,""],symbols_min:[8,4,1,""],symbols_std:[8,4,1,""],symbols_sum:[8,4,1,""]},"automl.metalearning.metafeatures.metafeatures_interaction":{MetaFeaturesManager:[8,2,1,""]},"automl.metalearning.metafeatures.metafeatures_interaction.MetaFeaturesManager":{dataset:[8,5,1,""],metafeatures_as_dict:[8,3,1,""],metafeatures_as_numpy_array:[8,3,1,""],metafeatures_as_pandas_df:[8,3,1,""]},"automl.utl":{arff_operations:[9,0,0,"-"],json_utils:[9,0,0,"-"],miscellaneous:[9,0,0,"-"]},"automl.utl.arff_operations":{ARFFWrapper:[9,2,1,""]},"automl.utl.arff_operations.ARFFWrapper":{add_attribute_key:[9,3,1,""],arrf_dict:[9,3,1,""],as_numpy_array:[9,3,1,""],as_pandas_df:[9,3,1,""],attribute_names:[9,3,1,""],attribute_types:[9,3,1,""],change_attribute_type:[9,3,1,""],copy:[9,3,1,""],data:[9,5,1,""],description:[9,5,1,""],drop_attributes:[9,3,1,""],key_attributes:[9,5,1,""],load_dataset:[9,3,1,""],name:[9,5,1,""],row_by_column_value:[9,3,1,""],shape:[9,5,1,""],sort_attributes:[9,3,1,""],sort_rows:[9,3,1,""],summary:[9,3,1,""],values_by_attribute:[9,3,1,""]},"automl.utl.json_utils":{write_cs_to_json_file:[9,1,1,""]},"automl.utl.miscellaneous":{argsort_list:[9,1,1,""],generate_random_id:[9,1,1,""]},automl:{automl_log:[0,1,1,""],bayesianoptimizationpiepeline:[1,0,0,"-"],createconfigspacepipeline:[2,0,0,"-"],datahandler:[3,0,0,"-"],discovery:[4,0,0,"-"],errors:[5,0,0,"-"],globalvars:[0,0,0,"-"],metalearning:[6,0,0,"-"],utl:[9,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","staticmethod","Python static method"],"5":["py","attribute","Python attribute"],"6":["py","exception","Python exception"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:staticmethod","5":"py:attribute","6":"py:exception","7":"py:data"},terms:{"10min":16,"abstract":[3,7],"boolean":3,"case":[7,11,16],"class":[1,2,3,4,5,6,7,8,9,16],"default":[1,2,3,4,5,7,8,9,16],"float":[1,3,4],"function":[1,2,4,7,9,16],"g\u00f3mez":10,"import":[11,16],"int":[1,3,4,7,9],"new":[3,5,6,7,9],"return":[1,2,3,4,7,9,16],"short":16,"static":[3,7,8],"true":[3,7,9,16],"try":4,For:[4,16],IDEs:16,Its:3,One:7,The:[0,1,2,3,4,6,7,8,9,12],There:11,These:[7,9],Used:[1,5],Useful:16,Using:[7,12],_encod:7,_k_:7,abil:[7,16],abl:4,about:[6,7,16],abov:4,access:9,accuraci:[4,7,11],achiev:16,achmea:[0,10,12],acquir:[7,9,12],add:[2,7,9,16],add_attribute_kei:9,add_classifi:7,add_dataset_metaknowledg:7,add_encod:7,add_imput:7,add_preprocessor:7,add_rescal:7,added:7,adding:2,addit:2,addition:[3,6,10,16],adjust:2,advis:16,after:[1,4,9],against:[4,7,9],agre:12,algebra:16,algorithm:[6,7],algorithm_id:7,algorithm_run:[6,7],algorithmrunsfil:7,algorithms_id:7,algoruns_csv_nam:6,algruns_fil:7,all:[7,12],allow:[4,16],alpha:10,alphabet:[4,9],alreadi:[4,8,9],also:[2,6,7,8,12,16],among:16,analysi:16,ani:[0,3,4,7,9,10,12],anoth:16,ansari:[10,12],answer:9,api:12,appear:9,appli:9,applicantincom:16,approach:[6,12],arbitrari:16,area:10,arefer:7,arff:[6,7,9],arff_datas:9,arff_dataset:9,arff_filepath:9,arff_oper:[0,14],arffwrapp:[7,9],arg:16,argsort:9,argsort_list:9,argument1:16,argument:[4,7,9,16],arrai:[3,4,7,9,16],arrf_dict:9,arrff_filepath:9,as_numpy_arrai:9,as_pandas_df:9,ascend:[9,16],assign:9,assist:[0,11,12,14],associ:[5,7],assum:6,attribut:[4,9],attribute_nam:9,attribute_typ:9,author:12,auto:[3,4,6,7,9,16],autom:[0,4,12],automat:[0,4,12],automl:[11,12,16],automl_log:0,automlerror:[4,5],automltesterror:5,avail:[7,16],axi:16,backward:9,base:[0,3,4,5,7,8,9,12,14,16],bash:16,basic:[9,12],bayesian:[1,4,12],bayesianoptimizationpiepelin:[0,14],bayesianoptimizationpipelin:[1,2,4],been:[0,1,3,4,9,12,16],behav:16,being:9,below:[10,16],besid:16,best:[1,4],better:[1,4],between:4,biggest:7,bit:16,bool:[3,4,7,8,9,16],both:7,bound:9,boxplot:16,bug:10,build:[2,7,12],build_configur:7,built:[5,6],call:9,callabl:[1,4,7],can:[1,3,4,6,7,9,11,16],candid:[6,12],capabl:16,categorical_ind:[3,8],caus:7,chang:[7,9],change_attribute_typ:9,character:6,characterist:16,class_entropi:8,class_ocurr:8,class_probability_max:8,class_probability_mean:8,class_probability_min:8,class_probability_std:8,classif:[0,3,11,12],classifi:[4,6,7,11,16],clean:16,cleven:10,clf:16,coapplicantincom:16,code:[4,9,12],column:[3,9,16],comban:6,combin:2,come:[0,4,7],common:9,commun:10,complet:[1,2,4,16],compli:4,compon:[2,6,7,9,10],compos:[3,16],comput:[0,4,6,7,11,16],compute_similar_dataset:[4,11],concaten:3,config_dict:4,configs_fil:7,configspacepipelin:2,configur:[1,2,6,7,9],configurationbuild:7,configurations_csv_nam:6,configurations_pars:[0,6],configurationsfil:7,configurationspac:[2,9],consequ:7,consid:[7,11],consist:1,constraint:4,constructor:3,contact:10,contain:[3,4,6,7,9,16],content:[12,14],contrar:16,contribut:[12,16],control:9,convent:16,copi:9,core:6,correspond:[7,9],cost:7,creat:[1,5,9],createconfigspacepipelin:[0,1,14],creation:2,criteria:16,csv:[6,7,16],current:9,currentlynonsupportederror:5,custom:5,customerror:[0,14],cutoff_tim:[1,4],cyril:10,darrai:[7,8],data:[0,3,6,8,9,10,12,16],databas:[0,4,6,9,16],datafram:[3,7,9,16],datahandl:[0,7,11,14],dataload:[0,7,11,14],dataset:[0,1,3,4,6,7,8,9,12],dataset_id:[3,11],dataset_ratio:8,deal:[1,2],def:16,defatul:4,defin:[3,4,5,7,9,16],depend:2,describ:[4,9],descript:9,desir:9,detail:12,dev:16,develop:[0,10,12,16],dict:[4,9],dictionari:[8,9],differ:[3,11,16],digit:3,dimension:16,dir:4,directori:16,discov:[4,12],discoverd:6,discoveri:[0,11,14],distanc:[4,7,11],distance_metr:7,doc:16,docstr:12,document:16,doe:9,done:7,dot:16,download:11,drop:[9,16],drop_attribut:9,dtype:9,dynam:16,each:[2,3,4,6,7,8,9],eas:[3,7,16],easi:[4,16],easier:9,ecosystem:16,effici:16,eindhoven:[0,12],either:[1,3,4,7,9,10],element:[4,7,9],elementwis:16,empti:9,encod:[7,11],encourag:10,engin:[0,6,10,12,16],enough:10,error:[0,14],errro:5,estim:2,etc:16,eval:4,evalu:1,evaluation_metr:[4,11],even:[8,9],exactli:9,exampl:16,except:5,execut:[1,4],expect:9,explan:5,expos:[0,3,7,8,9],express:9,extend:16,extra:4,facad:7,fail:7,fals:[3,4,7,8,9,16],familiar:16,featur:[0,3,4,6,7,8,9,12],features_df:11,featureunion:2,feed:7,fetch:3,field:[8,9],file:[2,4,6,7,9,16],file_nam:4,filepath:9,find:[0,4,7,10,12],fine:12,firoz:10,first:[4,7,9],fit:16,flexibl:16,fold:[1,4],follow:[3,4,16],forc:8,forget:16,form:[4,6,7,8,9],format:[3,4],fortran:16,found:[4,9,16],fourier:16,frame:[3,8,9,12],from:[0,1,2,3,4,5,7,9,12,16],full:[7,16],fundament:16,futur:[7,16],gener:[0,2,4,5,9,10,16],generate_pipelin:[4,11],generate_random_id:9,genet:12,get:[1,2,6,7,8,12],get_all_el:7,get_associated_configuration_id:7,get_config_spac:2,get_configur:7,get_metaknowledge_spac:7,get_openml_dataset:[3,11],get_optimized_pipelin:1,get_optimized_scor:1,github:[10,12],give:[1,4,16],given:[1,2,3,4,6,7,8,9,12,16],global:8,globalvar:14,goal:16,gomez:[10,12],good:16,group:3,guid:16,had:9,handl:[6,11],has:[0,1,3,4,12,16],have:4,help:[7,11],henc:[6,7],here:[0,3,7,8,9,11,16],hesist:10,hide:9,high:16,highlight:16,how:16,howev:[10,16],html:16,http:16,hyperparamet:[1,2,4],idend:7,identifi:[0,3,9],ids:7,ids_list:7,ignor:[4,9],ignore_similar_dataset:4,imag:16,implement:[5,6,7],implemet:12,imput:[7,11],includ:[0,7,8,12],inclus:7,increas:[1,4],indent:16,index:9,index_col:16,indexerror:9,indic:[3,9],inform:[6,7,9,16],initi:[1,3,7],inlin:16,inplac:9,input:[1,2,4],insid:0,instaci:7,instal:[12,16],instanc:[7,9],instance_id:7,instances_id:7,instanti:2,instead:2,integ:7,integr:16,intend:[0,12,16],intent:[8,9],interact:[3,6,7,8,9],interfac:9,intern:[0,9,12],internship:12,invalid:7,inverse_dataset_ratio:8,is_classification_problem:3,is_regression_problem:3,is_spars:3,iter:[1,4],its:[4,6,7,9,10,16],itself:[2,7],joaquin:10,jorg:10,json:[2,9],json_nam:9,json_util:[0,14],keep:16,kei:9,kept:4,key_attribut:9,keyerror:9,kfold:[1,4],knn:7,knowledg:[7,9,12],knwonledg:7,kurtosis_max:8,kurtosis_mean:8,kurtosis_min:8,kurtosis_std:8,kurtosiss:8,label:3,landmark:6,landmark_1nn:8,landmark_decision_node_learn:8,landmark_decision_tre:8,landmark_lda:8,landmark_naive_bay:8,landmark_random_node_learn:8,landmarkmodelpars:7,languag:16,last:4,latter:7,learn:[0,3,4,6,7,12],legaci:16,length:9,leon:10,letter:3,level:0,librari:[1,9,16],like:[7,16],limit:[1,2,4],limit_tim:4,linear:16,linear_model:16,list:[3,4,7,9,10,16],load:[3,7,9,16],load_dataset:9,load_datasets_info:7,load_db:[0,6],loadmetadb:7,loan_id:16,loan_statu:16,local:7,locat:9,log:[0,10],log_dataset_ratio:8,log_inverse_dataset_ratio:8,log_number_of_featur:8,log_number_of_inst:8,logger:0,logger_identifi:0,logic:5,logisticregress:16,look:[5,16],lower:2,machin:[0,7,12,16],mai:[6,7],main:16,make:[1,3,7,10,12],make_my_dataset:16,manipul:[2,9,16],mark:3,mathemat:[7,16],matlab:16,matplotlib:16,matric:9,matrix:[7,9,16],maximum:[1,4],messag:0,meta:[7,8,9,12],meta_suggest:7,metadatabas:9,metadb:7,metafeatur:[0,3,4,6,7],metafeatures_as_dict:8,metafeatures_as_numpy_arrai:8,metafeatures_as_pandas_df:8,metafeatures_interact:[0,6],metafeatures_vector:3,metafeaturesmanag:8,metaknowledg:7,metalearn:[0,4,14],metalearning_metr:[4,11],method:[3,4,7,8,9],metric:[1,4,6,7,12],metrics_avail:7,mine:16,minkowski:[4,7],minut:4,miscellan:[0,14],missing_valu:8,mix:7,mix_suggest:7,mkdatabas:7,mkdatabasecli:7,mlsuggest:[4,7],model:[0,4,6,7,12,16],model_row:7,models_by_metr:7,modif:9,modul:[14,16],month:10,more:[1,4,7,10,12,16],moreov:7,most:[6,11],msg:5,multi:16,must:[4,9],mutat:9,my_pipelin:11,myclass:[7,16],mypackag:16,n_char:9,n_featur:3,n_label:3,name:[3,4,6,9,16],natur:9,nearest:7,nearest_dataset:7,need:7,neighbor:[4,7],neither:[5,9],newtyp:9,next:[7,16],non:9,none:[0,1,3,4,5,7,8,9,16],nor:[4,9],note:7,noth:9,now:16,number:[1,3,4,7,9,16],number_of_categorical_featur:8,number_of_class:8,number_of_featur:8,number_of_features_with_na:8,number_of_inst:8,number_of_instances_with_na:8,number_of_missing_valu:8,number_of_numeric_featur:8,number_of_symbol:8,numpi:[3,4,7,8,9,12],nutshel:[6,12],obj:7,object:[1,2,3,4,7,8,9,12,16],observ:[7,9],obtain:[1,2,6,7,8],obviou:16,off:9,offici:[9,12],one:[4,5,6,7,9,16],ones:[4,8,11],onli:[1,3,4,6,10],open:[10,12,16],openml:[3,12],openml_id:[3,11],oper:[4,7,9],optim:[1,4,12],optimize_on:[1,4],optimize_pipelin:1,order:[4,7,9],org:16,orient:16,origin:9,other:[7,9,16],otherwis:9,our:[4,7,12],out:[2,3,4,9],output:[1,4,16],overrid:9,packag:[12,14],page:16,panda:[3,7,8,9,12],paper:7,paradigm:16,paramet:[0,1,2,3,4,5,7,8,9,16],parent:4,part:[9,12],pass:[3,4,7,9],path:[7,9],pca:8,pca_fraction_components_95v:8,pca_kurtosis_first_pc:8,pca_skewness_first_pc:8,pep8:16,pep:16,per:7,percentage_of_features_with_na:8,percentage_of_instances_with_na:8,percentage_of_missing_valu:8,perform:[1,4,6,7,9,16],person:10,pictur:7,pie:16,piec:9,pip:16,pipelin:[0,1,2,4,6,12,16],pipeline_gener:[0,14],pipeline_obj:11,pipelinediscoveri:4,pipelinediscoverobject:4,place:9,pleas:[7,10],plot:[7,16],plt:16,point:10,posit:9,possibl:[0,12],potenti:7,power:16,practic:16,pre:[0,6,7,12],precomput:8,predefin:2,predict:16,preprocess:16,preprocessor:[7,11],present:[11,16],primari:9,princip:16,principl:7,print:[0,9],privat:7,problem:[0,3,6,7,11,12,16],problem_typ:[3,11],process:[0,1,2,4,12],processor:[6,7],product:16,program:[12,16],programm:16,progress:15,project:10,pronounc:16,proport:3,provid:[1,2,3,4,6,7,8,9,16],purpos:[7,9,16],pydata:16,pylint:16,pyplot:16,python:[0,4,9,12],pytlint:16,qualiti:[1,4],queri:[4,7,9,12],quick:16,quickstart:16,rais:[1,3,4,5,7,9],ran:10,random:[3,4,16],random_st:[3,4],rang:2,ratio_nominal_numer:8,ratio_numerical_nomin:8,read:9,read_csv:16,readm:16,reason:5,recommend:16,recomput:[4,8],reduc:[4,12],reduced_search_spac:[4,11],reduced_ss:11,refer:[8,16],regist:3,regress:[0,3,12],regular:16,relat:[2,3,6,7,9],reli:16,reload:7,remov:16,repres:7,represent:[3,7],reproduc:3,requir:[1,4,10,16],rescal:[7,11],reset:2,respect:[3,9],restrict:[4,7],result:[1,3,4,6,7,9,11,16],retriev:[4,7,9],revers:9,robl:[10,12],robust:10,row:[7,9],row_by_column_valu:9,run:[7,10,11,16],runtim:[1,4,7],same:9,satisfi:[4,9],save:[4,7],save_pipelin:[4,11],scaler:[7,11,16],scienc:[9,10,16],scientif:16,scientist:[0,11,12],scikit:[3,4,6,7,11,12],scipi:12,score:[1,4],scratch:[4,12],script:16,seamlessli:16,search:[4,7,9,12],search_spac:4,second:[1,4,7,9],seed:4,seem:5,self:[7,9],seri:[7,9],serv:7,set:[1,3,4,7,16],setup:16,shape:[3,9],share:[0,12],should:[3,4,7,9],show:[9,16],sigh:16,similar:[4,6,7,9,12,16],similar_dataset:4,similarity_metr:4,similarli:[9,16],simpl:[7,16],simple_matrix:7,sinc:[9,10],singl:7,situat:2,skew:8,skewness_max:8,skewness_mean:8,skewness_min:8,skewness_std:8,sklearn:[4,6,7,9,12,16],sklearn_pipelin:11,smac3:1,smac:[1,12],snippet:16,softwar:[10,16],solut:[6,7,12],solv:[0,3,6,7,12,16],some:[7,9,11,16],sort:[4,9,16],sort_attr_backward:9,sort_attribut:9,sort_row:9,sort_valu:16,sourc:[3,10,12,16],space:[1,2,4,7,9,12],spars:3,specif:9,specifi:[1,4,9],speedili:16,split:3,src_list:9,stabl:[10,16],stackoverflow:9,stage:10,standardscal:16,start:11,state:4,statist:[6,8],statisticalinform:8,step:6,still:5,stop:[1,4],storag:7,store:[3,5,6,7,9,16],str:[0,3,4,5,7,9,16],straightforward:9,stratifi:[1,4],string:[1,3,4,7,16],strongli:16,structur:16,student:[0,10,12],style:12,subgroup:7,submodel:[3,6],submodul:[6,14],subpackag:[1,14],suggest:[4,6,7],suggestion_list:7,summari:9,suppos:[1,2,4],symbols_max:8,symbols_mean:8,symbols_min:8,symbols_std:8,symbols_sum:8,take:[1,4,16],target:[3,4],target_df:11,target_dir:[4,11],task:[3,9],techniqu:1,technolog:[0,12],test:[3,5,11,16],test_nam:5,test_siz:3,thei:[4,8,9],them:9,themselv:7,therebi:2,thi:[0,1,2,3,4,6,7,8,9,10,12,16],thing:16,think:11,thrown:4,time:[1,4,7],todai:10,todo:7,tool:[0,12],tpot:[4,7,12],tpot_object:4,tpot_param:4,tpotbas:4,tpotclassifi:4,tpotregressor:4,tracker:10,train:[3,16],train_test_split:3,transform:16,trough:16,tue:[10,12],tune:12,tupl:[3,4,7,9,16],tutori:16,two:7,txt:16,type:[1,2,3,4,5,7,8,9,11,16],typeerror:[1,3,4,7,9],understand:12,understood:7,unexplain:5,unit:16,univers:[0,12],unutbu:9,upper:2,use:[0,1,4,6,7,9,12,16],used:[1,2,4,5,7,9,16],useful:[5,7,9],user:[2,16],uses:[1,16],using:[1,4,12],util:9,utl:[0,14],valid:[4,7,9,12],validation_scor:4,valu:[2,3,4,7,9],valueerror:[3,4,9],values_by_attribut:9,vanschoren:10,variabl:[0,7,8],varieti:16,variou:1,vector:[3,6,8],version:[7,16],via:[10,12],vink:10,vscode:16,wai:[7,12],wait:4,want:[4,9,10],web:16,weight:7,weighted_matrix:7,well:6,were:8,what:9,when:[1,4,5,9,16],where:[4,5,7,9,16],wheter:9,whether:[3,4,7,8,9],which:[1,2,4,7],wide:16,within:[2,3,16],without:[4,7],work:[1,3,4,6,7,8,9],workspac:16,would:[7,16],wrapper:9,write:9,write_cs_to_json_fil:9,www:16,x_test:16,x_train:16,x_val:4,y_pred:16,y_test:16,y_train:16,y_val:4,yet:4,you:[10,16],your:16},titles:["automl package","automl.bayesianoptimizationpiepeline package","automl.createconfigspacepipeline package","automl.datahandler package","automl.discovery package","automl.errors package","automl.metalearning package","automl.metalearning.database package","automl.metalearning.metafeatures package","automl.utl package","Contribute","How to use the tool","Welcome to auto-ml\u2019s documentation!","Installing the tool","automl","AutoML in a nutshell","Python basics to understand the tool"],titleterms:{The:16,ani:11,arff_oper:9,assist:4,auto:12,automl:[0,1,2,3,4,5,6,7,8,9,14,15],base:[1,2,11],basic:16,bayesian:11,bayesianoptimizationpiepelin:1,build:11,code:16,comput:8,configurations_pars:7,content:[0,1,2,3,4,5,6,7,8,9],contribut:10,createconfigspacepipelin:2,customerror:5,data:11,databas:7,datahandl:3,dataload:3,dataset:11,discov:11,discoveri:4,docstr:16,document:12,error:5,frame:11,from:11,get:11,globalvar:0,how:11,instal:13,json_util:9,learn:[11,16],load_db:7,meta:11,metafeatur:8,metafeatures_interact:8,metalearn:[6,7,8],metric:11,miscellan:9,modul:[0,1,2,3,4,5,6,7,8,9],numpi:16,nutshel:15,object:11,openml:11,optim:11,packag:[0,1,2,3,4,5,6,7,8,9,16],panda:[11,16],pipelin:11,pipeline_gener:4,python:16,queri:11,reduc:11,scikit:16,scipi:16,scratch:11,search:11,similar:11,space:11,style:16,submodul:[0,1,2,3,4,5,7,8,9],subpackag:[0,6],tool:[11,13,16],understand:16,use:11,using:11,utl:9,valid:11,welcom:12}})