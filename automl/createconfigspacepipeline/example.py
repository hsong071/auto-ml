from sklearn.pipeline import Pipeline
from automl.createconfigspacepipeline.base import ConfigSpacePipeline
from sklearn.preprocessing import Normalizer
from sklearn.decomposition import FastICA
from xgboost import XGBClassifier
from sklearn.ensemble import ExtraTreesClassifier
from tpot.builtins import StackingEstimator
from sklearn.pipeline import FeatureUnion
from sklearn.decomposition import PCA

pipeline = Pipeline([('normalize-1', Normalizer(norm="max")), ('fastica', FastICA()),
                     ('Union-1', FeatureUnion([('pca-3', PCA(n_components=0.3)),
                                               ('Union-2', FeatureUnion([('pca-5', PCA(n_components=0.5)),
                                                                        ('normalize-2', Normalizer(norm="l1"))])),
                                               ('pca-7', PCA(n_components=0.7))
                                               ])),
                     ('stacking-1', StackingEstimator(estimator=ExtraTreesClassifier(n_estimators=10))),
                     ('stacking-2', StackingEstimator(estimator=ExtraTreesClassifier(n_estimators=20))),
                     ('stacking-3', StackingEstimator(estimator=ExtraTreesClassifier(n_estimators=300))),
                     ('Xgboost', XGBClassifier(base_score=0.9,
                                               booster="dart",
                                               min_child_weight=21,
                                               n_estimators=10,
                                               reg_alpha=1e-10))])

z = ConfigSpacePipeline(pipeline)
cs = z.get_config_space()

print(cs)
