Search.setIndex({"docnames": ["cloud/aws/ecs", "cloud/aws/eks", "cloud/aws/index", "cloud/aws/sagemaker", "cloud/aws/single-node", "cloud/azure/index", "cloud/azure/single-node", "cloud/gcp/index", "cloud/gcp/single-node", "cloud/gcp/vertex_ai", "cloud/ibm/index", "cloud/ibm/single-node", "cloud/index", "hpc/htcondor", "hpc/index", "hpc/pbs", "hpc/slurm", "index", "local", "platforms/databricks", "platforms/index", "platforms/kubeflow", "platforms/kubernetes", "tools/index", "tools/kubernetes/dask-gateway", "tools/kubernetes/dask-helm-chart", "tools/kubernetes/dask-kubernetes", "tools/kubernetes/dask-operator", "tools/rapids-docker"], "filenames": ["cloud/aws/ecs.md", "cloud/aws/eks.md", "cloud/aws/index.md", "cloud/aws/sagemaker.md", "cloud/aws/single-node.md", "cloud/azure/index.md", "cloud/azure/single-node.md", "cloud/gcp/index.md", "cloud/gcp/single-node.md", "cloud/gcp/vertex_ai.md", "cloud/ibm/index.md", "cloud/ibm/single-node.md", "cloud/index.rst", "hpc/htcondor.md", "hpc/index.rst", "hpc/pbs.md", "hpc/slurm.md", "index.rst", "local.md", "platforms/databricks.md", "platforms/index.rst", "platforms/kubeflow.md", "platforms/kubernetes.md", "tools/index.rst", "tools/kubernetes/dask-gateway.md", "tools/kubernetes/dask-helm-chart.md", "tools/kubernetes/dask-kubernetes.md", "tools/kubernetes/dask-operator.md", "tools/rapids-docker.md"], "titles": ["Elastic Container Service (ECS)", "Elastic Kubernetes Service (EKS)", "Amazon Web Services", "Sagemaker", "Single Node", "Microsoft Azure", "Azure Single Node RAPIDS", "Google Cloud Platform", "Single Node", "Vertex AI", "IBM Cloud", "Single Node", "Cloud", "HTCondor", "HPC", "PBS", "SLURM", "Welcome to the RAPIDS Deployment documentation!", "Local Machine", "Databricks", "Platforms", "Kubeflow", "Kubernetes", "Tools", "Dask Gateway", "Dask Helm Chart", "Dask Kubernetes", "Dask Operator", "Docker Images"], "terms": {"rapid": [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 18, 21, 22, 23, 26], "can": [0, 1, 2, 4, 5, 6, 8, 9, 10, 11, 18, 21, 22, 25, 26, 27], "deploi": [0, 1, 2, 4, 5, 8, 9, 10, 11, 22, 25], "multi": [0, 27], "node": [0, 1, 2, 5, 7, 10, 12, 17, 21, 22, 27], "cluster": [0, 1, 17, 22, 23], "us": [0, 1, 3, 4, 8, 9, 11, 12, 17, 18, 21, 22, 23, 25, 26], "dask": [0, 1, 6, 8, 17, 20, 23], "": [0, 1, 21, 22, 25, 26, 27], "cloudprovid": 0, "manag": [0, 1, 7, 21, 26, 27], "tool": [0, 17, 21, 22, 26], "For": [0, 3, 4, 5, 6, 8, 11, 21, 22, 25, 26, 27], "more": [0, 1, 3, 22, 25, 27], "detail": [0, 1, 3, 25], "see": [0, 2, 4, 6, 10, 11, 18, 21, 25, 27], "our": [0, 1, 21, 27], "blog": 0, "post": 0, "0": [0, 1, 5, 6, 9, 21, 22, 25, 27], "run": [0, 1, 3, 4, 6, 8, 9, 11, 17, 21, 22, 23, 27], "from": [0, 6, 8, 9, 17, 20, 22, 25, 26, 27], "within": [0, 22, 27], "aw": [0, 1, 2, 3, 4], "The": [0, 4, 6, 8, 11, 21, 26, 27], "follow": [0, 6, 21, 25, 26, 27], "step": [0, 4, 21], "assum": [0, 26], "you": [0, 1, 4, 8, 9, 11, 21, 22, 25, 27], "ar": [0, 1, 4, 6, 11, 18, 21, 22, 25, 27], "them": [0, 21, 27], "same": [0, 21, 25, 26, 27], "vpc": 0, "One": 0, "wai": [0, 2, 4, 5, 8, 10, 11, 22, 26], "ensur": [0, 21, 25, 27], "thi": [0, 1, 4, 6, 9, 21, 22, 25, 26, 27], "i": [0, 1, 3, 4, 6, 8, 9, 11, 21, 22, 25, 26, 27], "through": [0, 25], "singl": [0, 2, 5, 7, 10, 12, 17, 21, 22, 26], "instanc": [0, 1, 2, 3, 4, 5, 8, 9, 10, 21], "ec2": [0, 4], "instruct": [0, 18, 21, 27], "1": [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 21, 22, 25, 26, 27], "setup": [0, 3, 17, 23, 25], "credenti": [0, 4, 11], "first": [0, 21, 25], "need": [0, 5, 9, 21, 25, 26, 27], "allow": [0, 6, 9, 21, 27], "u": [0, 1, 27], "interact": [0, 17, 20, 21], "cli": [0, 8], "If": [0, 6, 22, 25, 27], "someon": 0, "els": 0, "your": [0, 1, 4, 8, 9, 11, 21, 22, 25, 26], "account": 0, "get": [0, 1, 4, 6, 11, 18, 21, 27], "kei": [0, 1, 6], "provid": [0, 1, 2, 4, 9, 10, 11, 21, 22, 25], "number": [0, 1, 8, 21], "easiest": [0, 4, 8, 11], "local": [0, 1, 17, 22, 27], "environ": [0, 1, 6, 8, 9, 17, 21, 22, 23, 25, 27], "command": [0, 8, 21, 25, 27], "line": 0, "pip": [0, 17, 21], "instal": [0, 1, 4, 5, 10, 17, 18, 22, 23, 26], "awscli": [0, 1], "configur": [0, 1, 8, 9, 10, 17, 21, 22, 23], "2": [0, 1, 3, 4, 5, 8, 9, 10, 17, 21, 26, 27], "To": [0, 21, 25, 26, 27], "3": [0, 1, 3, 4, 5, 21, 25, 26, 27], "creat": [0, 1, 5, 8, 9, 11, 22, 25, 26, 27], "an": [0, 1, 4, 6, 11, 21, 22, 25, 27], "In": [0, 6, 8, 21, 25, 26, 27], "consol": [0, 8], "visit": [0, 1, 6, 21, 25], "dashboard": [0, 6, 9, 17, 20, 25, 27], "section": [0, 1, 4, 9, 11, 21, 27], "left": [0, 6, 21], "hand": 0, "side": [0, 21], "click": [0, 6, 8, 9, 21], "make": [0, 21, 22, 27], "sure": [0, 21], "select": [0, 1, 6, 8, 9, 21], "linux": [0, 4, 18], "network": [0, 5, 10, 21], "so": [0, 21, 22, 25, 27], "we": [0, 3, 5, 6, 21, 22, 25, 26, 27], "specifi": [0, 1, 8, 26], "option": [0, 4, 11, 21, 27], "give": [0, 21], "name": [0, 1, 2, 6, 8, 10, 21, 22, 25, 26, 27], "ex": 0, "chang": [0, 27], "type": [0, 1, 2, 4, 8, 10, 11, 22, 27], "one": [0, 1, 21, 22, 27], "support": [0, 1, 4, 5, 6, 11, 18, 21], "gpu": [0, 1, 2, 4, 5, 8, 10, 11, 17, 20, 22, 25, 26, 27], "introduct": [0, 1, 4, 11], "list": [0, 1, 2, 4, 6, 8, 10, 11, 21, 26], "exampl": [0, 3, 4, 6, 11, 17, 21, 22, 23, 25], "p3": [0, 2], "2xlarg": [0, 2], "each": [0, 21, 25, 27], "which": [0, 1, 3, 21, 22, 25, 27], "come": [0, 21], "nvidia": [0, 1, 4, 5, 8, 10, 11, 21, 22, 25, 26, 27], "v100": [0, 2, 5, 6, 10], "default": [0, 21, 25, 27], "all": [0, 1, 3, 4, 6, 11, 21, 25, 27], "subnet": 0, "avail": [0, 5, 6, 21, 25], "other": [0, 6, 8, 9, 27], "now": [0, 6, 21, 25], "wait": 0, "creation": 0, "complet": 0, "4": [0, 1, 2, 4, 5, 21], "amazon": [0, 4, 12, 17], "resourc": [0, 1, 6, 21, 22, 25, 26, 27], "arn": 0, "just": 0, "set": [0, 1, 6, 8, 21, 25, 27], "aws_default_region": 0, "variabl": [0, 6, 27], "region": [0, 1, 5, 6], "export": 0, "code": [0, 3, 26], "fo": 0, "being": [0, 22], "ecsclust": 0, "object": [0, 21, 25, 27], "python": [0, 21, 26, 27], "session": [0, 21, 22, 27], "dask_cloudprovid": 0, "import": [0, 21, 25, 26, 27], "cluster_arn": 0, "n_worker": [0, 21, 27], "num_work": 0, "worker_gpu": 0, "num_gpu": 0, "exist": [0, 27], "launch": [0, 4, 10, 21, 22, 25, 27], "task": 0, "worker": [0, 1, 6, 21, 22, 25, 26], "start": [0, 3, 4, 6, 8, 11, 18, 21, 27], "expos": [0, 9, 22, 27], "must": [0, 21, 27], "less": 0, "than": [0, 25], "equal": 0, "e": [0, 21], "g": [0, 6], "5": [0, 1, 4, 6, 11, 21, 22, 25, 26, 27], "test": [0, 4, 5, 8, 9, 10, 21], "distribut": [0, 21, 25, 27], "client": [0, 17, 21, 23, 25, 27], "load": [0, 26], "sampl": 0, "data": [0, 3, 5, 21], "cudf": [0, 6, 8, 21, 25, 26], "dask_cudf": [0, 21, 26], "ddf": [0, 26], "dataset": 0, "timeseri": 0, "gdf": 0, "map_partit": 0, "from_panda": 0, "groupbi": 0, "id": 0, "count": [0, 2, 8, 10], "comput": [0, 5, 8, 21, 25, 26, 27], "head": [0, 21], "out": [0, 3, 17, 20, 22, 27], "34": 0, "xavier": 0, "99495": 0, "oliv": 0, "100251": 0, "charli": 0, "99354": 0, "zelda": 0, "99709": 0, "alic": 0, "100106": 0, "dtype": 0, "int64": 0, "6": [0, 1, 5], "cleanup": 0, "continu": [0, 6], "incur": 0, "charg": 0, "until": 0, "shut": 0, "down": [0, 6, 21, 25, 27], "either": [0, 21, 26], "scale": [0, 3, 17, 20, 22, 26, 27], "zero": 0, "altogeth": 0, "plan": 0, "again": 0, "soon": 0, "probabl": 0, "prefer": [0, 8, 27], "reduc": [0, 22], "via": [1, 4, 11, 21, 22, 25, 26, 27], "helm": [1, 17, 20, 23], "found": [1, 21], "doc": 1, "depend": [1, 22], "kubectl": [1, 17, 21, 22, 23, 25], "eksctl": 1, "public": [1, 6], "don": [1, 21], "t": [1, 21, 25, 27], "have": [1, 9, 21, 22, 25, 27], "cluster_nam": 1, "version": [1, 3, 6, 8, 9, 18, 21, 25, 26, 27], "14": 1, "nodegroup": 1, "node_inst": 1, "num_nod": 1, "min": [1, 6, 25], "max": [1, 5], "max_nod": 1, "volum": [1, 21], "size": [1, 5, 6, 11], "node_s": 1, "ssh": [1, 4, 6, 8, 11], "access": [1, 4, 6, 9, 11, 17, 20, 22, 25], "path": [1, 9, 27], "id_rsa": [1, 6], "pub": [1, 6], "auto": 1, "gener": [1, 27], "refer": [1, 21], "maximum": 1, "updat": [1, 25], "point": [1, 6, 21, 26], "folder": 1, "file": [1, 21, 25], "where": [1, 22], "save": 1, "addon": 1, "f": [1, 21, 22, 25, 27], "http": [1, 21, 22, 25, 27], "raw": [1, 21], "githubusercont": [1, 21], "com": [1, 21, 22, 25, 26, 27], "k8": 1, "devic": 1, "plugin": 1, "beta4": 1, "yml": 1, "repo": [1, 25], "add": [1, 6, 21, 25, 27], "rapidsai": [1, 4, 6, 8, 11, 21, 22, 25, 26, 27], "ai": [1, 7], "chart": [1, 17, 20, 23], "schedul": [1, 21, 22, 25, 26], "servicetyp": 1, "loadbalanc": [1, 22, 27], "jupyt": [1, 3, 4, 6, 9, 11, 21, 22, 25, 27], "rapidstest": 1, "7": [1, 4], "svc": [1, 27], "ip": [1, 4, 6, 9, 11, 27], "extern": [1, 25, 27], "port": [1, 4, 6, 9, 11, 21, 22, 25, 27], "ag": [1, 21, 27], "clusterip": [1, 22, 27], "10": [1, 6, 11, 25, 27], "100": 1, "none": [1, 27], "443": 1, "tcp": [1, 27], "12m": 1, "251": 1, "155": 1, "a454a9741455544cfa37fc4ac71caa53": 1, "868718558": 1, "east": 1, "elb": 1, "amazonaw": 1, "80": [1, 5], "30633": 1, "85": 1, "11": [1, 21, 26], "182": 1, "a9c703f1c002f478ea60d9acaf165bab": 1, "1146605388": 1, "8786": [1, 4, 6, 11, 27], "30346": 1, "8787": [1, 4, 6, 11, 25, 27], "32444": 1, "address": [1, 4, 11, 25, 27], "convert": 1, "dn": 1, "abov": [1, 21, 22, 26, 27], "ipv4": 1, "Then": [1, 21, 22, 27], "obtain": 1, "browser": [1, 6, 9, 22, 25], "8": [1, 2, 5, 10, 25], "delet": [1, 27], "releas": [1, 6, 21, 25, 26], "namespac": [1, 21], "service_nam": 1, "valu": [1, 6, 21, 25, 26, 27], "requir": [1, 3, 4, 6, 18, 25, 26], "remov": [1, 22, 25], "its": 1, "associ": [1, 11, 27], "9": [1, 6, 11, 21, 22, 25, 26, 27], "uninstal": 1, "sagemak": [2, 12, 17], "elast": [2, 12, 17], "kubernet": [2, 12, 17, 20, 23, 27], "ek": [2, 12, 17], "contain": [2, 4, 5, 8, 9, 11, 12, 17, 21, 22, 25, 26, 27], "ec": [2, 12, 17], "sever": [2, 5, 10], "acceler": [2, 8, 10, 21, 22, 25], "below": [2, 4, 9, 10, 11, 21], "cloud": [2, 9, 17], "inst": [2, 10], "xgpu": [2, 10], "ram": [2, 10, 21], "total": [2, 10], "g4dn": 2, "xlarg": 2, "t4": 2, "16": [2, 5, 10], "gb": [2, 5, 10], "12xlarg": 2, "64": [2, 5, 10], "metal": [2, 10], "128": [2, 10], "8xlarg": 2, "16xlarg": 2, "p3dn": 2, "24xlarg": 2, "32": [2, 5, 10], "256": [2, 10], "p4": 2, "p4d": 2, "a100": [2, 5, 21], "40": [2, 5], "320": [2, 5], "g5": 2, "a10g": 2, "24": [2, 5], "4xlarg": 2, "96": [2, 5, 27], "48xlarg": 2, "192": 2, "also": [3, 21, 22, 27], "work": [3, 21, 25], "ve": 3, "written": 3, "guid": [3, 4, 11, 25, 26], "how": [3, 27], "simplest": 3, "host": [3, 18, 21], "notebook": [3, 4, 7, 8, 11, 17, 20, 23], "clone": 3, "repositori": [3, 25], "includ": [3, 4, 25], "some": [3, 21, 22, 25, 27], "ipynb": [3, 6, 25], "larg": 3, "hpo": 3, "job": 3, "check": [3, 8, 21, 27], "There": [4, 11, 21], "multipl": [4, 11, 27], "docker": [4, 6, 8, 9, 11, 17, 21, 22, 23], "imag": [4, 6, 8, 9, 11, 17, 21, 22, 23, 25, 26, 27], "initi": [4, 8], "It": [4, 6, 21, 22, 26, 27], "recommend": [4, 5, 6, 9, 22, 26], "ami": 4, "alreadi": [4, 6, 22], "driver": [4, 5, 11, 21, 27], "tesla": [4, 10], "deep": [4, 5], "learn": [4, 5], "suppli": [4, 11, 27], "log": [4, 6, 11], "short": [4, 11, 21], "read": [4, 11], "document": [4, 11, 21, 25, 27], "runtim": [4, 5, 11, 21, 22, 25, 26, 27], "custom": [4, 8, 9, 11, 21, 22, 25, 27], "page": [4, 11, 17, 18, 21, 22, 27], "pull": [4, 6, 11, 21], "cuda11": [4, 6, 11, 21, 22, 25, 26, 27], "ubuntu18": 4, "04": [4, 6, 11, 21, 22, 25, 26, 27], "rm": [4, 6, 11, 21], "p": [4, 6, 11, 25], "8888": [4, 6, 11, 22, 25], "py3": [4, 6, 11, 21, 22, 25, 26, 27], "automat": [4, 11, 27], "go": [4, 11], "virtual": [5, 10, 11], "machin": [5, 8, 9, 17], "secur": 5, "group": [5, 21, 27], "variou": [5, 21], "kind": [5, 21, 22, 26, 27], "vm": [5, 8, 10], "differ": [5, 25], "user": [5, 6, 8, 9, 21, 22, 26], "nc": 5, "nd": 5, "optim": [5, 6], "v3": 5, "seri": [5, 21], "vcpu": [5, 10], "memori": [5, 21, 26], "gib": 5, "temp": 5, "storag": 5, "nvme": 5, "disk": 5, "uncach": 5, "throughput": 5, "iop": 5, "mbp": 5, "nic": 5, "bandwidth": 5, "standard_nc24ads_a100_v4": 5, "220": 5, "1123": 5, "12": 5, "30000": 5, "1000": 5, "20": [5, 26, 27], "000": 5, "standard_nc48ads_a100_v4": 5, "48": [5, 10], "440": 5, "2246": 5, "160": 5, "60000": 5, "2000": 5, "standard_nc96ads_a100_v4": 5, "880": 5, "4492": 5, "120000": 5, "4000": 5, "standard_nc4as_t4_v3": 5, "28": 5, "180": 5, "8000": 5, "standard_nc8as_t4_v3": 5, "56": 5, "360": 5, "standard_nc16as_t4_v3": 5, "110": 5, "standard_nc64as_t4_v3": 5, "2880": 5, "32000": 5, "standard_nc6s_v3": [5, 6], "112": 5, "736": 5, "20000": 5, "200": [5, 27], "standard_nc12s_v3": 5, "224": 5, "1474": 5, "40000": 5, "400": 5, "standard_nc24s_v3": 5, "448": 5, "2948": 5, "80000": 5, "800": 5, "standard_nc24rs_v3": 5, "rdma": 5, "capabl": 5, "v2": 5, "standard_nd96asr_v4": 5, "900": 5, "6000": 5, "nvlink": 5, "standard_nd96amsr_a100_v4": 5, "1900": 5, "6400": 5, "standard_nd40rs_v2": 5, "672": 5, "24000": 5, "overview": 5, "maintain": 6, "pre": [6, 10], "latest": [6, 9, 21], "vmi": 6, "drop": 6, "interfac": [6, 26, 27], "fill": 6, "inform": 6, "enabl": [6, 8], "note": [6, 25], "zone": 6, "when": [6, 21, 26, 27], "notic": 6, "x": [6, 25], "No": [6, 21], "mean": 6, "doe": [6, 21, 22], "try": 6, "review": 6, "prepar": [6, 9], "descript": 6, "az_vmnam": 6, "az_resourcegroup": 6, "deploy": [6, 21, 25], "az_loc": 6, "westus2": 6, "az_imag": 6, "urn": 6, "ngc_azure_17_11": 6, "ngc": 6, "base": [6, 21], "22_06_0": 6, "gen2": 6, "22": [6, 8, 11, 21, 22, 25, 26, 27], "06": [6, 21, 22, 25, 27], "az_siz": 6, "az_usernam": 6, "az_ssh_kei": 6, "az": 6, "locat": [6, 8], "admin": 6, "usernam": 6, "publish": 6, "output": 6, "tabl": 6, "inspect": 6, "offici": [6, 27], "panel": 6, "inbound": 6, "rule": [6, 21], "destin": 6, "rang": [6, 26], "keep": 6, "rest": 6, "unchang": 6, "az_nsgnam": 6, "az_nsgrulenam": 6, "n": [6, 21, 26], "prioriti": 6, "1050": 6, "take": [6, 21], "up": [6, 21, 25, 27], "minut": [6, 25], "provis": [6, 22], "selector": [6, 21, 22, 26, 27], "choos": [6, 8, 21], "method": 6, "column": 6, "stabl": [6, 21, 25], "nvcr": [6, 26], "io": [6, 9, 26], "core": [6, 21, 22, 25, 26, 27], "ubuntu20": [6, 11, 21, 22, 25, 26, 27], "shm": [6, 11], "1g": [6, 11], "ulimit": [6, 11], "memlock": [6, 11], "lab": [6, 9, 21], "execut": [6, 26], "cell": [6, 25], "open": [6, 9, 21, 22, 25], "enter": [6, 8, 25], "url": [6, 21], "blank": 6, "monitor": [6, 27], "statu": [6, 21, 27], "vertex": 7, "gcp": 8, "nagiv": [8, 9], "engin": 8, "under": [8, 9, 25, 27], "next": [8, 21, 27], "registri": [8, 9], "alloc": [8, 26], "buffer": 8, "stdin": 8, "pseudo": 8, "tty": [8, 21], "interactivti": 8, "after": [8, 9], "aspect": [8, 9], "gcloud": 8, "minimum": [8, 26], "flag": 8, "instance_nam": 8, "image_path": 8, "gpu_numb": 8, "gpu_typ": 8, "onc": [8, 9, 21, 27], "attach": 8, "shell": 8, "container_id": 8, "root": [8, 9, 21], "conda": [8, 17, 22, 26], "packag": [8, 18, 21], "opt": 8, "env": [8, 21, 25, 26, 27], "build": 8, "channel": 8, "08": [8, 26], "00": 8, "cuda_11_py39_gb71873c701_0": 8, "cudf_kafka": 8, "py39_gb71873c701_0": 8, "libcudf": 8, "cuda11_gb71873c701_0": 8, "libcudf_kafka": 8, "gb71873c701_0": 8, "while": [9, 21], "18": 9, "new": [9, 21, 25, 27], "softwar": 9, "befor": 9, "built": [9, 25], "8080": 9, "servic": [9, 12, 17, 21, 22, 25, 27], "arg": [9, 26, 27], "rapids_imag": 9, "entrypoint": 9, "notebookapp": 9, "token": 9, "allow_origin": 9, "push": 9, "googl": 9, "ui": 9, "speciti": 9, "gcr": 9, "fulli": 9, "jupyterlab": 9, "navig": [9, 21], "anoth": [9, 22], "tab": [9, 21], "login": 10, "requisit": 10, "gx2": 10, "8x64x1v100": 10, "16x128x1v100": 10, "16x128x2v100": 10, "32x256x2v100": 10, "p100": 10, "bare": 10, "mg4c": 10, "32x384": 10, "2xp100": 10, "384": 10, "48x384": 10, "2xv100": 10, "float": 11, "web": [11, 12, 17], "ibm": [11, 12, 17], "server": [11, 21, 22, 25], "microsoft": [12, 17], "azur": [12, 17], "link": [12, 17, 21], "slurm": [14, 17], "pb": [14, 17], "htcondor": [14, 17], "wsl": 17, "platform": [17, 22], "oper": [17, 20, 23], "classic": [17, 20, 26], "gatewai": [17, 20, 23], "kubeflow": [17, 20], "mani": [17, 20, 22, 25, 27], "databrick": [17, 20], "hpc": 17, "prerequisit": [17, 23], "daskclust": [17, 21, 23], "kubeclust": [17, 21, 23, 26], "index": 17, "modul": 17, "search": [17, 21], "current": [18, 25], "experiment": [18, 21, 27], "window": 18, "subsystem": 18, "pod": [21, 22, 25, 26, 27], "These": 21, "were": 21, "against": 21, "v1": [21, 22, 27], "21": 21, "directli": [21, 22, 27], "addit": [21, 25], "find": [21, 22], "shown": 21, "typic": 21, "want": [21, 22, 25, 27], "verifi": [21, 25], "Be": 21, "match": [21, 25, 26, 27], "cuda": [21, 26, 27], "gke": 21, "would": 21, "onward": 21, "doesn": [21, 27], "matter": 21, "thei": [21, 22], "backward": 21, "compat": 21, "copi": 21, "smi": 21, "restart": [21, 27], "never": [21, 26], "495": 21, "46": 21, "On": 21, "few": [21, 27], "let": [21, 27], "like": [21, 22, 27], "box": 21, "past": 21, "got": 21, "cpu": [21, 26], "someth": 21, "littl": 21, "higher": 21, "8gb": 21, "form": 21, "scroll": 21, "bottom": 21, "hit": 21, "should": [21, 26, 27], "pack": 21, "full": 21, "amaz": 21, "readi": [21, 27], "connect": [21, 22, 25, 27], "everyth": [21, 22, 25], "okai": 21, "termin": 21, "symbol": 21, "home": 21, "directori": 21, "easili": 21, "explor": 21, "ln": 21, "jovyan": 21, "those": 21, "librari": [21, 22, 25, 27], "offer": 21, "etl": 21, "develop": 21, "panda": 21, "datafram": [21, 26], "onto": [21, 27], "spread": 21, "over": 21, "do": [21, 25, 27], "leverag": [21, 25, 27], "sourc": [21, 26], "perform": 21, "calcul": 21, "ha": [21, 22, 25, 27], "ani": [21, 25], "itself": 21, "pleas": 21, "date": [21, 27], "appli": [21, 22, 27], "main": 21, "dask_kubernet": [21, 26, 27], "manifest": 21, "yaml": [21, 22, 25, 26, 27], "daskworkergroup": [21, 27], "daskjob": [21, 27], "successfulli": 21, "expect": 21, "yet": 21, "succe": 21, "A": [21, 25, 26], "l": [21, 27], "applic": 21, "775b8bbbd5": 21, "zdrf7": 21, "74": 21, "lastli": 21, "edit": 21, "role": 21, "org": [21, 25, 27], "api": 21, "clusterrol": 21, "apigroup": 21, "verb": 21, "necessari": [21, 25], "done": 21, "class": [21, 27], "tell": 21, "instead": [21, 22, 27], "similar": 21, "amount": 21, "time": 21, "worker_command": [21, 27], "limit": [21, 22, 25, 26, 27], "disable_jupyt": [21, 25, 26, 27], "true": [21, 25, 26, 27], "two": [21, 27], "widget": 21, "call": [21, 27], "therefor": 21, "here": [21, 27], "realli": 21, "valuabl": 21, "extra": 21, "apivers": [21, 22, 27], "v1alpha1": 21, "poddefault": 21, "metadata": [21, 22, 26], "spec": [21, 22, 26, 27], "matchlabel": 21, "desc": 21, "dask_distributed__dashboard__link": 21, "nb_prefix": 21, "proxi": [21, 22, 27], "volumemount": 21, "config": [21, 25], "mountpath": 21, "jupyter_server_config": 21, "py": 21, "subpath": 21, "configmap": 21, "c": [21, 26], "serverproxi": 21, "host_allowlist": 21, "lambda": 21, "app": [21, 22], "content": 21, "look": [21, 22, 27], "thing": [21, 22, 27], "safe": 21, "becaus": [21, 27], "reli": 21, "specif": [21, 26], "istio": [21, 27], "enforc": 21, "control": 21, "dashboard_link": 21, "attribut": 21, "show": [21, 27], "extens": 21, "view": 21, "plot": 21, "stat": 21, "about": 21, "right": [21, 22], "menu": 21, "icon": 21, "arrang": 21, "howev": 21, "drag": 21, "around": 21, "integr": 22, "case": [22, 25], "label": [22, 26, 27], "nodeport": [22, 27], "targetport": [22, 27], "30002": 22, "securitycontext": 22, "fsgroup": 22, "containerport": [22, 27], "alternatv": 22, "could": [22, 27], "forward": [22, 25, 27], "individu": 22, "alongsid": 22, "consist": 22, "compon": [22, 27], "both": [22, 27], "benefit": 22, "empow": 22, "nativ": [22, 27], "dynam": 22, "flexibl": 22, "usual": 22, "conjunct": 22, "By": [22, 25, 27], "burst": 22, "beyond": 22, "spreak": 22, "across": 22, "unless": 22, "older": 22, "possibl": 22, "too": 22, "phase": 22, "favour": 22, "organis": 22, "mai": [22, 25, 26], "central": 22, "abstract": 22, "underli": 22, "permiss": 22, "consum": [22, 25], "centralis": 22, "programat": 22, "turn": 22, "back": 22, "what": [22, 27], "util": 22, "awai": 22, "pipelin": [22, 27], "preconfigur": 25, "scalabl": 25, "juptyt": 25, "top": [25, 27], "tag": 25, "dask_work": 25, "dask_cuda_work": 25, "replica": [25, 27], "serviceport": 25, "password": 25, "hash": 25, "argon2": 25, "argon2id": 25, "v": 25, "19": 25, "m": 25, "10240": 25, "tbbhublux7efzgrkqqiwtw": 25, "rg": 25, "jcbb2kyf2vqzxkhmnvhnyju9mzngtm2eu2": 25, "f7qpc": 25, "woker": 25, "workaround": 25, "Will": 25, "futur": [25, 27], "exlicitli": 25, "request": [25, 26], "insid": [25, 27], "assign": 25, "place": 25, "regular": 25, "desir": 25, "topographi": 25, "ingress": 25, "traffic": [25, 27], "redirect": 25, "correspond": 25, "simplic": [25, 26], "127": [25, 27], "localhost": [25, 27], "correctli": 25, "conveni": 25, "pass": 25, "walk": 25, "valid": 25, "metric": 25, "examin": 25, "upgrad": 25, "articl": 26, "introduc": 26, "miniconda": 26, "domain": 26, "demo": 26, "meet": 26, "minim": 26, "required": 26, "mention": 26, "forg": 26, "cudatoolkit": 26, "make_pod_spec": 26, "gpu_worker_spec": 26, "cpu_limit": 26, "cpu_request": 26, "memory_limit": 26, "3g": 26, "memory_request": 26, "gpu_limit": 26, "altern": [26, 27], "standard": 26, "cluster_typ": 26, "dask_typ": 26, "gpu_work": 26, "restartpolici": 26, "imagepullpolici": [26, 27], "ifnotpres": [26, 27], "dask_scheduler_address": 26, "rmm": 26, "pick": 26, "At": [26, 27], "small": 26, "result": 26, "from_cudf": 26, "npartit": 26, "sum": 26, "print": 26, "190": 26, "With": 27, "definit": 27, "crd": 27, "describ": 27, "appropri": 27, "good": 27, "choic": 27, "dask_worker_nam": 27, "comm": 27, "protocol": 27, "readinessprob": 27, "httpget": 27, "health": 27, "initialdelaysecond": 27, "periodsecond": 27, "livenessprob": 27, "15": 27, "break": 27, "nest": 27, "mainli": 27, "between": 27, "disabl": 27, "commun": 27, "probe": 27, "prefix": 27, "envoi": 27, "mangl": 27, "outsid": 27, "0c202b85fd": 27, "4m13": 27, "ff5d376714": 27, "4m14": 27, "223": 27, "217": 27, "along": 27, "abl": 27, "additon": 27, "implement": 27, "hood": 27, "3m28": 27, "07d674589a": 27, "3m30": 27, "a55ed88265": 27, "df785ab050": 27, "202": 27, "without": 27, "know": 27, "discov": 27, "And": 27, "manual": 27, "close": 27, "regist": 27, "exit": 27, "hook": 27, "process": 27, "shutdown_on_clos": 27, "fals": 27, "stage": 27, "made": 27, "persist": 27, "from_nam": 27, "wish": 27}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"elast": [0, 1], "contain": [0, 6], "servic": [0, 1, 2], "ec": 0, "kubernet": [1, 21, 22, 26], "ek": 1, "amazon": 2, "web": 2, "sagemak": 3, "singl": [4, 6, 8, 11], "node": [4, 6, 8, 11], "microsoft": 5, "azur": [5, 6], "us": [5, 6, 27], "link": [5, 6], "rapid": [6, 11, 17, 25, 27], "creat": [6, 21], "virtual": 6, "machin": [6, 18], "gpu": [6, 21], "nvidia": 6, "driver": 6, "runtim": 6, "option": 6, "1": 6, "vm": [6, 11], "via": 6, "portal": 6, "2": [6, 18], "cli": 6, "network": [6, 11], "secur": 6, "group": 6, "nsg": 6, "instal": [6, 11, 21, 25, 27], "test": [6, 11], "googl": 7, "cloud": [7, 10, 12], "platform": [7, 20], "vertex": 9, "ai": 9, "manag": 9, "notebook": [9, 21, 22, 25], "ibm": 10, "launch": 11, "instanc": 11, "configur": [11, 25, 27], "login": 11, "pre": 11, "requisit": 11, "htcondor": 13, "hpc": 14, "pb": 15, "slurm": 16, "welcom": 17, "deploy": 17, "document": 17, "deploi": 17, "indic": 17, "tabl": 17, "local": 18, "conda": 18, "docker": [18, 28], "pip": 18, "wsl": 18, "databrick": 19, "kubeflow": [21, 22], "scale": [21, 25], "out": 21, "mani": 21, "dask": [21, 22, 24, 25, 26, 27], "oper": [21, 22, 27], "cluster": [21, 25, 26, 27], "access": [21, 27], "dashboard": 21, "from": 21, "interact": 22, "helm": [22, 25], "chart": [22, 25], "classic": 22, "gatewai": [22, 24], "tool": 23, "run": 25, "prerequisit": 26, "client": 26, "environ": 26, "setup": 26, "verif": 26, "daskclust": 27, "exampl": 27, "kubectl": 27, "manifest": 27, "breakdown": 27, "metadata": 27, "worker": 27, "schedul": 27, "your": 27, "kubeclust": 27, "imag": 28}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Elastic Container Service (ECS)": [[0, "elastic-container-service-ecs"]], "Elastic Kubernetes Service (EKS)": [[1, "elastic-kubernetes-service-eks"]], "Amazon Web Services": [[2, "amazon-web-services"], [2, null]], "Sagemaker": [[3, "sagemaker"]], "Single Node": [[4, "single-node"], [8, "single-node"], [11, "single-node"]], "Microsoft Azure": [[5, "microsoft-azure"], [5, null]], "Useful Links": [[5, "useful-links"], [6, "useful-links"]], "Azure Single Node RAPIDS": [[6, "azure-single-node-rapids"]], "Create Azure Virtual Machine with GPU, Nvidia Driver and Nvidia Container Runtime": [[6, "create-azure-virtual-machine-with-gpu-nvidia-driver-and-nvidia-container-runtime"]], "Option 1: Create VM Via Azure Portal": [[6, "option-1-create-vm-via-azure-portal"]], "Option 2: Create VM Via Azure-CLI": [[6, "option-2-create-vm-via-azure-cli"]], "Create Network Security Group": [[6, "create-network-security-group"]], "Option 1: Create NSG Via Azure Portal": [[6, "option-1-create-nsg-via-azure-portal"]], "Option 2: Create NSG Via Azure-CLI": [[6, "option-2-create-nsg-via-azure-cli"]], "Install RAPIDS": [[6, "install-rapids"], [11, "install-rapids"]], "Test RAPIDS": [[6, "test-rapids"], [11, "test-rapids"]], "Google Cloud Platform": [[7, "google-cloud-platform"], [7, null]], "Vertex AI": [[9, "vertex-ai"]], "Managed Notebooks": [[9, "managed-notebooks"]], "IBM Cloud": [[10, "ibm-cloud"], [10, null]], "Launch a VM instance": [[11, "launch-a-vm-instance"]], "Configure networking": [[11, "configure-networking"]], "Login": [[11, "login"]], "Install pre-requisites": [[11, "install-pre-requisites"]], "Cloud": [[12, "cloud"], [12, null]], "HTCondor": [[13, "htcondor"]], "HPC": [[14, "hpc"], [14, null]], "PBS": [[15, "pbs"]], "SLURM": [[16, "slurm"]], "Welcome to the RAPIDS Deployment documentation!": [[17, "welcome-to-the-rapids-deployment-documentation"]], "Deploy RAPIDS on": [[17, null]], "Deploy RAPIDS with": [[17, null]], "Indices and tables": [[17, "indices-and-tables"]], "Local Machine": [[18, "local-machine"]], "Conda": [[18, "conda"]], "Docker": [[18, "docker"]], "pip": [[18, "pip"]], "WSL 2": [[18, "wsl-2"]], "Databricks": [[19, "databricks"]], "Platforms": [[20, "platforms"], [20, null]], "Kubeflow": [[21, "kubeflow"]], "Kubeflow Notebooks": [[21, "kubeflow-notebooks"]], "Scaling out to many GPUs": [[21, "scaling-out-to-many-gpus"]], "Installing the Dask Kubernetes operator": [[21, "installing-the-dask-kubernetes-operator"]], "Creating a Dask cluster": [[21, "creating-a-dask-cluster"]], "Accessing the Dask dashboard from notebooks": [[21, "accessing-the-dask-dashboard-from-notebooks"]], "Kubernetes": [[22, "kubernetes"]], "Interactive Notebook": [[22, "interactive-notebook"]], "Helm Chart": [[22, "helm-chart"]], "Dask Operator": [[22, "dask-operator"], [27, "dask-operator"]], "Dask Kubernetes (classic)": [[22, "dask-kubernetes-classic"]], "Dask Gateway": [[22, "dask-gateway"], [24, "dask-gateway"]], "KubeFlow": [[22, "kubeflow"]], "Tools": [[23, "tools"], [23, null]], "Dask Helm Chart": [[25, "dask-helm-chart"]], "Configuring RAPIDS": [[25, "configuring-rapids"]], "Installing the Helm Chart": [[25, "installing-the-helm-chart"]], "Running Rapids Notebook": [[25, "running-rapids-notebook"]], "Notebooks and Cluster Scaling": [[25, "notebooks-and-cluster-scaling"]], "Dask Kubernetes": [[26, "dask-kubernetes"]], "Prerequisite": [[26, "prerequisite"]], "Client environment setup": [[26, "client-environment-setup"]], "Cluster setup": [[26, "cluster-setup"]], "Verification": [[26, "verification"]], "Installation": [[27, "installation"]], "Configuring a RAPIDS DaskCluster": [[27, "configuring-a-rapids-daskcluster"]], "Example using kubectl": [[27, "example-using-kubectl"]], "Manifest breakdown": [[27, "manifest-breakdown"]], "Metadata": [[27, "metadata"]], "Worker": [[27, "worker"]], "Scheduler": [[27, "scheduler"]], "Accessing your Dask cluster": [[27, "accessing-your-dask-cluster"]], "Example using KubeCluster": [[27, "example-using-kubecluster"]], "Docker Images": [[28, "docker-images"]]}, "indexentries": {}})