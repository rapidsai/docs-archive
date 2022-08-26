Search.setIndex({"docnames": ["api", "basics", "command/rapids_cmake_build_type", "command/rapids_cmake_install_lib_dir", "command/rapids_cmake_make_global", "command/rapids_cmake_parse_version", "command/rapids_cmake_support_conda_env", "command/rapids_cmake_write_git_revision_file", "command/rapids_cmake_write_version_file", "command/rapids_cpm_find", "command/rapids_cpm_init", "command/rapids_cpm_package_override", "command/rapids_cuda_init_architectures", "command/rapids_cuda_init_runtime", "command/rapids_cuda_set_architectures", "command/rapids_cython_create_modules", "command/rapids_cython_init", "command/rapids_export", "command/rapids_export_cpm", "command/rapids_export_find_package_file", "command/rapids_export_find_package_root", "command/rapids_export_package", "command/rapids_export_write_dependencies", "command/rapids_export_write_language", "command/rapids_find_generate_module", "command/rapids_find_package", "dependency_tracking", "index", "packages/rapids_cpm_cuco", "packages/rapids_cpm_gtest", "packages/rapids_cpm_libcudacxx", "packages/rapids_cpm_nvbench", "packages/rapids_cpm_nvcomp", "packages/rapids_cpm_rmm", "packages/rapids_cpm_spdlog", "packages/rapids_cpm_thrust", "packages/rapids_cpm_versions"], "filenames": ["api.rst", "basics.rst", "command/rapids_cmake_build_type.rst", "command/rapids_cmake_install_lib_dir.rst", "command/rapids_cmake_make_global.rst", "command/rapids_cmake_parse_version.rst", "command/rapids_cmake_support_conda_env.rst", "command/rapids_cmake_write_git_revision_file.rst", "command/rapids_cmake_write_version_file.rst", "command/rapids_cpm_find.rst", "command/rapids_cpm_init.rst", "command/rapids_cpm_package_override.rst", "command/rapids_cuda_init_architectures.rst", "command/rapids_cuda_init_runtime.rst", "command/rapids_cuda_set_architectures.rst", "command/rapids_cython_create_modules.rst", "command/rapids_cython_init.rst", "command/rapids_export.rst", "command/rapids_export_cpm.rst", "command/rapids_export_find_package_file.rst", "command/rapids_export_find_package_root.rst", "command/rapids_export_package.rst", "command/rapids_export_write_dependencies.rst", "command/rapids_export_write_language.rst", "command/rapids_find_generate_module.rst", "command/rapids_find_package.rst", "dependency_tracking.rst", "index.rst", "packages/rapids_cpm_cuco.rst", "packages/rapids_cpm_gtest.rst", "packages/rapids_cpm_libcudacxx.rst", "packages/rapids_cpm_nvbench.rst", "packages/rapids_cpm_nvcomp.rst", "packages/rapids_cpm_rmm.rst", "packages/rapids_cpm_spdlog.rst", "packages/rapids_cpm_thrust.rst", "packages/rapids_cpm_versions.rst"], "titles": ["API Reference", "RAPIDS-CMake Basics", "rapids_cmake_build_type", "rapids_cmake_install_lib_dir", "rapids_cmake_make_global", "rapids_cmake_parse_version", "rapids_cmake_support_conda_env", "rapids_cmake_write_git_revision_file", "rapids_cmake_write_version_file", "rapids_cpm_find", "rapids_cpm_init", "rapids_cpm_package_override", "rapids_cuda_init_architectures", "rapids_cuda_init_runtime", "rapids_cuda_set_architectures", "rapids_cython_create_modules", "rapids_cython_init", "rapids_export", "rapids_export_cpm", "rapids_export_find_package_file", "rapids_export_find_package_root", "rapids_export_package", "rapids_export_write_dependencies", "rapids_export_write_language", "rapids_find_generate_module", "rapids_find_package", "Dependency Tracking", "Welcome to rapids-cmake\u2019s documentation!", "rapids_cpm_cuco", "rapids_cpm_gtest", "rapids_cpm_libcudacxx", "rapids_cpm_nvbench", "rapids_cpm_nvcomp", "rapids_cpm_rmm", "rapids_cpm_spdlog", "rapids_cpm_thrust", "rapids-cmake package version format"], "terms": {"The": [0, 1, 2, 5, 7, 8, 10, 11, 15, 16, 17, 19, 23, 25, 26, 35, 36], "rapids_cmak": 0, "function": [0, 1, 3, 4, 14, 15, 16, 17, 23, 25, 26], "provid": [0, 1, 3, 4, 6, 10, 11, 13, 15, 16, 17, 20, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "cmake": [0, 4, 7, 8, 9, 11, 12, 14, 16, 17, 18, 19, 22, 23, 24, 25, 31, 33], "logic": 0, "numer": 0, "project": [0, 1, 3, 5, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "requir": [0, 9, 12, 14, 15, 16, 17, 18, 21, 23, 25, 26, 28, 29, 30, 32, 33, 34, 35, 36], "rapids_cmake_build_typ": 0, "rapids_cmake_install_lib_dir": [0, 17], "rapids_cmake_make_glob": 0, "rapids_cmake_parse_vers": 0, "rapids_cmake_support_conda_env": 0, "rapids_cmake_write_git_revision_fil": 0, "rapids_cmake_write_version_fil": 0, "rapids_cpm": [0, 36], "allow": [0, 9, 10, 11, 14, 17, 19, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "build": [0, 2, 6, 7, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "depend": [0, 9, 17, 20, 22, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35], "built": [0, 4, 9, 15, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35, 36], "correct": [0, 3, 7, 9, 12, 17, 19, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "support": [0, 9, 12, 14, 17, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "rapids_cpm_init": [0, 9], "rapids_cpm_find": [0, 10, 11, 26, 36], "These": [0, 23], "easili": [0, 17, 19, 26], "rapid": [0, 11, 12, 14, 15, 16, 17, 19, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "make": [0, 4, 11, 12, 17, 23, 24, 26, 27], "sure": [0, 4, 11, 17, 20, 23, 26], "thei": [0, 1, 4, 16, 25, 26], "us": [0, 1, 2, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "same": [0, 10, 15, 24], "version": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "flag": [0, 15, 16, 32], "rest": 0, "exact": 0, "each": [0, 1, 8, 15, 26, 36], "can": [0, 1, 4, 8, 14, 15, 17, 20, 24, 26, 36], "found": [0, 18, 19, 20, 21, 24, 32, 36], "here": [0, 10, 11, 17, 25], "rapids_cpm_cuco": 0, "rapids_cpm_gtest": 0, "rapids_cpm_libcudacxx": 0, "rapids_cpm_nvbench": 0, "rapids_cpm_nvcomp": 0, "rapids_cpm_rmm": 0, "rapids_cpm_spdlog": 0, "rapids_cpm_thrust": 0, "rapids_cpm_package_overrid": 0, "rapids_cython": 0, "modul": [0, 1, 9, 10, 15, 16, 17, 22, 24, 25, 26, 27], "scikit": [0, 16], "compon": [0, 1, 5, 8, 16, 17, 26], "behavior": [0, 9, 16], "thi": [0, 1, 2, 3, 4, 7, 9, 10, 11, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 26, 27, 32, 36], "i": [0, 1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "undefin": [0, 16], "ar": [0, 1, 4, 7, 16, 17, 20, 24, 25, 26, 27], "invok": [0, 16, 18, 21, 25], "outsid": [0, 16], "manag": [0, 16], "rapids_cython_init": [0, 15], "rapids_cython_create_modul": 0, "rapids_find": 0, "system": [0, 36], "rapids_find_generate_modul": [0, 25, 26], "rapids_find_packag": [0, 26], "rapids_cuda": 0, "rapids_cuda_init_architectur": [0, 14], "rapids_cuda_init_runtim": 0, "rapids_cuda_set_architectur": [0, 12], "advanc": 0, "rapids_export": [0, 18, 21, 22, 26], "instal": [0, 3, 9, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tree": [0, 10, 17], "config": [0, 2, 9, 17, 22, 24], "includ": [0, 1, 6, 7, 9, 12, 17, 18, 21, 23, 24, 26], "For": [0, 7, 8], "vast": 0, "major": [0, 5, 21, 36], "should": [0, 1, 4, 9, 13, 14, 15, 17, 18, 21, 24, 25, 26, 32, 36], "suffici": 0, "But": 0, "when": [0, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 36], "mai": 0, "command": [0, 16, 18, 21, 26, 36], "rapids_write_depend": 0, "rapids_write_languag": 0, "creat": [0, 4, 5, 6, 7, 15, 16, 22, 23, 28, 29, 30, 31, 32, 33, 34, 35], "custom": [0, 1, 19, 24, 26], "rapids_export_write_depend": [0, 18, 21], "rapids_export_write_languag": 0, "onli": [0, 1, 5, 6, 17, 18, 23, 24, 26, 32, 36], "insuffici": 0, "rapids_export_cpm": [0, 9, 26], "rapids_export_find_package_fil": 0, "rapids_export_find_package_root": 0, "rapids_export_packag": [0, 9, 18, 26], "design": [1, 26], "acquir": 1, "via": [1, 7, 9, 13, 17, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "": [1, 8, 9, 17, 23, 25, 26, 32], "fetch": 1, "content": [1, 6, 17, 23, 24, 36], "your": [1, 9, 14, 17, 19, 24, 25], "cmake_minimum_requir": [1, 12], "NOT": [1, 12], "exist": [1, 2, 5, 7, 8, 9, 12, 14, 25, 26, 32, 36], "cmake_current_binary_dir": [1, 7, 8, 12], "proj": 1, "_rapid": 1, "file": [1, 7, 8, 10, 11, 12, 15, 17, 19, 22, 23, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "download": [1, 10, 12, 32, 36], "http": [1, 9, 11, 12, 32, 36], "raw": [1, 12], "githubusercont": [1, 12], "com": [1, 9, 11, 12, 32, 36], "rapidsai": [1, 12, 36], "branch": [1, 7, 12, 36], "22": 1, "10": [1, 3, 7, 9, 10, 11, 20, 29, 31, 33, 34, 35, 36], "endif": [1, 12], "cpm": [1, 4, 9, 10, 11, 17, 18, 23, 28, 29, 30, 31, 32, 33, 34, 35, 36], "cuda": [1, 12, 13, 14, 17, 23], "export": [1, 9, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "find": [1, 9, 18, 20, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "subset": 1, "featur": [1, 26, 32], "need": [1, 9, 15, 17, 19, 20, 24, 25, 26, 31, 36], "To": [1, 36], "enabl": [1, 14, 17, 23, 32], "compris": 1, "follow": [1, 7, 8, 9, 10, 11, 24, 25, 26, 36], "primari": 1, "There": 1, "two": [1, 25, 26], "wai": [1, 15, 17, 26], "call": [1, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "which": [1, 9, 10, 11, 15, 21, 25, 26], "import": [1, 4, 9, 21, 25], "commonli": 1, "load": 1, "independ": 1, "dir": 1, "function_nam": 1, "At": 1, "time": [1, 26], "develop": [1, 26, 32, 36], "verifi": [1, 32], "do": [1, 9, 32, 36], "you": [1, 9, 14, 24, 25, 26, 32], "default": [1, 2, 4, 7, 8, 10, 11, 15, 17, 36], "git": [1, 7, 9, 11, 36], "repositri": 1, "done": [1, 9, 11, 24, 26], "like": [1, 9, 24, 25], "fetchcont": [1, 11], "fetchcontent_declar": 1, "git_repositori": [1, 9], "github": [1, 9, 11, 36], "my_fork": 1, "git_tag": [1, 9, 11, 36], "my_feature_branch": 1, "tell": 1, "ignor": [1, 11, 36], "explicit": [1, 36], "url": [1, 36], "ones": [1, 19, 20], "an": [1, 7, 8, 9, 11, 15, 17, 18, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "incorrect": 1, "approach": [1, 11], "peopl": 1, "try": [1, 4], "modifi": [1, 3, 6, 11], "line": [1, 16], "point": 1, "That": 1, "doesn": [1, 2, 7, 8, 10, 11, 17, 18, 23, 24, 25, 26, 31, 32], "t": [1, 2, 7, 8, 9, 10, 11, 14, 17, 18, 23, 24, 25, 26, 31, 32, 36], "work": [1, 18, 26], "contain": [1, 8, 15, 22, 23, 36], "repositori": 1, "clone": [1, 36], "new": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35], "v21": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 24, 25, 29, 30, 31, 33, 34, 35], "06": [2, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 32], "00": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35], "establish": [2, 3, 6, 10, 12, 13, 14], "cmake_build_typ": 2, "valu": [2, 8, 9, 10, 11, 12, 14, 17, 28, 29, 30, 31, 32, 33, 34, 35, 36], "default_typ": 2, "If": [2, 5, 7, 8, 9, 10, 11, 14, 15, 17, 24, 25, 26, 32, 36], "gener": [2, 7, 8, 9, 15, 17, 18, 21, 22, 24, 25, 36], "ninja": 2, "makefil": 2, "explicitli": [2, 7, 8, 13, 17, 24], "set": [2, 4, 7, 8, 9, 10, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "user": [2, 4, 7, 9, 10, 11, 25, 36], "remov": [2, 8, 9, 26], "situat": 2, "where": [2, 4, 24, 36], "No": [2, 17], "empti": [2, 15], "type": [2, 17], "one": [2, 7, 15, 24], "alreadi": [2, 9, 13, 26], "hold": [3, 4, 6, 7, 8, 17], "librari": [3, 7, 13, 15, 17, 24, 26, 32, 36], "directori": [3, 4, 6, 9, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "out_variable_nam": [3, 5], "modify_install_libdir": 3, "lib": [3, 24, 26], "lib64": 3, "multiarch": 3, "tupl": 3, "conda": [3, 6], "awar": 3, "return": 3, "detect": 3, "conda_prefix": [3, 6], "also": [3, 6, 24, 26], "offer": [3, 5, 6, 32], "abil": [3, 5, 6], "cmake_install_libdir": 3, "comput": [3, 7, 8, 32, 36], "modif": [3, 5, 6, 7, 24], "rel": [3, 7, 8, 15, 24], "all": [4, 7, 8, 9, 11, 12, 13, 14, 15, 17, 22, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "target": [4, 9, 13, 15, 17, 18, 21, 25, 26, 36], "have": [4, 5, 8, 9, 15, 17, 24, 25, 26, 32], "global": [4, 6, 7, 9, 17, 21, 23, 25], "visibl": [4, 9, 25], "matter": 4, "how": [4, 5, 9, 12, 17, 26, 36], "construct": [4, 19, 20, 35], "target_var": 4, "scope": [4, 17, 23, 25], "referenc": 4, "name": [4, 5, 7, 8, 9, 12, 15, 17, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35, 36], "ani": [4, 5, 7, 9, 10, 11, 14, 16, 17, 19, 20, 25, 28, 29, 30, 31, 32, 33, 34, 35, 36], "those": [4, 9, 10, 24, 25, 26], "add_librari": [4, 17, 26], "caus": 4, "problem": 4, "reason": [4, 9, 14, 18, 26], "about": 4, "could": 4, "either": [4, 7, 8, 17, 19], "abov": [4, 18], "promot": [4, 9, 25], "easier": [4, 12, 24, 27], "refer": [4, 27], "variabl": [4, 7, 8, 10, 13, 17, 25], "list": [4, 9, 11, 14, 15, 17, 24, 25], "extract": 5, "x": [5, 8, 17, 36], "y": [5, 8, 17], "z": [5, 8, 17], "string": [5, 8, 15, 17, 36], "consist": [5, 9, 25, 28, 29, 30, 31, 32, 33, 34, 35], "manner": 5, "minor": [5, 21, 36], "patch": [5, 8], "major_minor": 5, "2": [5, 8, 9, 25, 32, 36], "3": [5, 26, 32, 36], "without": [5, 32], "write": 5, "complex": 5, "regular": 5, "express": [5, 17], "first": [5, 9, 11, 14, 24, 25, 36], "from": [5, 6, 7, 8, 9, 15, 17, 21, 23, 24, 25, 36], "place": [5, 17, 27], "second": 5, "third": 5, "noth": 5, "happen": [5, 9], "pattern": [5, 17, 18, 26], "exampl": [5, 7, 8, 11, 12, 17, 25, 36], "properli": [5, 12, 17, 36], "43": 5, "01": 5, "0": [5, 8, 9, 11, 36], "project_vers": 5, "messag": [5, 17], "statu": [5, 17], "success": [5, 26], "link": [6, 13, 15], "target_nam": [6, 7], "modify_prefix_path": 6, "interfac": [6, 7], "execut": [6, 7, 9, 17], "cmake_prefix_path": 6, "path": [6, 7, 8, 9, 15, 20, 24, 28, 29, 30, 31, 32, 33, 34, 35], "environ": 6, "prefix": [6, 7, 8, 15], "build_prefix": 6, "base": [6, 10, 14, 18, 24], "current": [6, 7, 12, 14, 17, 23, 26, 32, 33, 36], "env": [6, 10], "insert": [6, 17], "front": 6, "c": [7, 8, 15], "header": [7, 8, 24], "revis": 7, "inform": [7, 8, 9, 10, 11, 17, 18, 21, 25], "file_path": [7, 8, 19, 22, 23], "macro": [7, 8], "sha1": 7, "uncommit": 7, "chang": [7, 9, 26], "must": [7, 10, 11, 17, 25, 32, 36], "target_link_librari": [7, 26], "so": [7, 9, 15, 17, 20, 23, 24, 25, 26, 36], "befor": [7, 9, 10, 11, 12, 15, 20, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "By": [7, 8, 11, 17, 27, 32], "specifi": [7, 8, 10, 11, 13, 17, 19, 20, 24, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "equal": [7, 8], "project_nam": [7, 8, 12, 17], "record": [7, 9, 11, 18, 19, 20, 21, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "defin": [7, 8], "_git_branch": 7, "Will": [7, 12, 14, 18, 21, 22, 24, 25], "store": 7, "otherwis": 7, "detach": 7, "head": 7, "state": [7, 10], "_git_sha1": 7, "full": 7, "commit": 7, "_git_is_dirti": 7, "track": [7, 9, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35], "ha": [7, 9, 15, 17, 19, 28, 29, 30, 31, 32, 33, 34, 35, 36], "aren": [7, 10, 26, 36], "dirti": 7, "_git_vers": 7, "tag": [7, 9, 36], "distanc": 7, "g": 7, "run": 7, "describ": 7, "alwai": [7, 9], "00a": 7, "18": 7, "g7efb04f": 7, "indic": [7, 15], "lastest": 7, "7efb04f": 7, "we": [7, 8, 9, 15, 17, 20, 24, 26, 36], "after": [7, 12, 28, 29, 30, 31, 32, 33, 34, 35], "absolut": [7, 8, 15], "locat": [7, 8, 9, 24, 26], "still": 7, "written": [7, 19, 26], "unknown": 7, "won": [7, 9], "consid": [7, 24, 32], "consum": [7, 17, 19, 21, 26, 36], "08": [8, 28], "separ": 8, "uncondition": 8, "_version_major": 8, "project_version_major": 8, "_version_minor": 8, "project_version_minor": 8, "_version_patch": 8, "project_version_patch": 8, "lead": 8, "zero": 8, "presum": [8, 9], "repres": [8, 36], "decim": 8, "placehold": [8, 9, 25, 36], "4": 8, "becom": 8, "abitrari": 9, "packagenam": [9, 18, 19, 20, 21, 24, 25, 26, 31], "global_target": [9, 17, 18, 21, 25], "build_export_set": [9, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "install_export_set": [9, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "cpm_arg": [9, 18, 28, 29, 30, 31, 32, 33, 34, 35], "normal": [9, 25, 26], "option": [9, 17, 25, 36], "findpackag": [9, 19, 24], "associ": [9, 18, 19, 21, 25, 36], "sinc": [9, 25, 32], "differ": [9, 15, 17, 25], "between": [9, 25], "local": [9, 11, 24, 25, 36], "usag": [9, 15, 26, 36], "packag": [9, 10, 11, 17, 19, 20, 21, 23, 24, 25, 26, 32], "would": [9, 25, 26], "made": [9, 17, 21, 25], "propag": [9, 13, 25, 26], "code": [9, 17, 27], "condit": [9, 32], "check": [9, 17, 32], "correctli": [9, 17, 20, 26], "had": 9, "been": [9, 17, 28, 29, 30, 31, 32, 33, 34, 35], "brought": 9, "non": [9, 17, 26], "mean": [9, 19, 24, 26, 36], "cpmfindpackag": [9, 17, 18, 26, 28, 29, 30, 31, 32, 33, 34, 35], "occur": [9, 11, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "part": [9, 18, 19, 21, 24, 25, 26, 31], "our": [9, 19, 20, 24, 25, 28, 29, 30, 31, 32, 33, 34, 35], "find_depend": [9, 17, 20, 21, 25, 26, 28, 29, 30, 32, 33, 34, 35], "provi": [9, 24], "extra": [9, 23, 24, 25], "argument": [9, 25, 28, 29, 30, 31, 32, 33, 34, 35], "pass": [9, 12, 14, 16, 25], "down": [9, 25], "_source_dir": 9, "sourc": [9, 15, 17, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36], "_binary_dir": 9, "_ad": 9, "true": [9, 11, 13, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36], "ad": [9, 19, 26, 28, 29, 30, 31, 32, 33, 34, 35], "respect": 9, "other": [9, 26], "don": [9, 17, 24, 26], "while": [9, 24, 26], "expect": [9, 14, 26], "valid": 9, "setup": [9, 17], "cpm_": 9, "_sourc": 9, "cpmaddpackag": 9, "instead": [9, 17, 26, 36], "add": [9, 15, 26], "desir": [9, 36], "attempt": 9, "find_packag": [9, 17, 21, 25], "common": [9, 26], "fmt": 9, "8": [9, 36], "1": [9, 11, 25, 26, 36], "github_repositori": 9, "fmtlib": 9, "git_shallow": [9, 11, 36], "googl": [9, 29, 36], "benchmark": 9, "v": [9, 36], "5": [9, 36], "benchmark_enable_test": 9, "off": [9, 17, 32], "benchmark_enable_instal": 9, "preset": [10, 11], "infrastructur": [10, 19, 24], "overrid": [10, 11, 14, 32, 36], "json_override_file_path": 10, "cpm_source_cach": 10, "multipl": [10, 11, 15, 26, 36], "nest": 10, "share": [10, 13, 27], "cach": 10, "json": [10, 11, 28, 29, 30, 31, 32, 33, 34, 35, 36], "format": [10, 11], "document": [10, 11, 17, 26], "entri": [10, 11, 24, 32, 36], "invoc": [10, 11, 16], "json_file_path": 11, "pre": [11, 32, 36], "configur": [11, 14, 26], "shown": 11, "below": 11, "thrust": [11, 35, 36], "12": [11, 30, 36], "git_url": [11, 36], "nvidia": [11, 32, 36], "always_download": [11, 36], "exclude_from_al": [11, 36], "fals": [11, 13, 36], "search": [11, 19, 22, 24, 27, 36], "request": [11, 14, 22, 23, 24, 32, 36], "later": 11, "win": 11, "match": [11, 17, 24, 36], "parent": 11, "child": 11, "extend": 12, "cmake_cuda_architectur": [12, 14], "nativ": [12, 14], "architectur": [12, 14, 36], "compil": [12, 14, 36], "what": [12, 13, 14, 17, 25, 26], "pars": 12, "special": 12, "automat": [12, 14, 26], "immedi": 12, "gpu": [12, 14], "present": [12, 14], "machin": [12, 14, 36], "example_rapid": 12, "version_major": 12, "version_minor": 12, "exampleproject": 12, "runtim": 13, "use_stat": 13, "cmake_cuda_runtime_librari": 13, "static": [13, 17], "up": [14, 23], "mode": [14, 17, 22, 25], "rare": [14, 26], "workflow": [14, 26], "some": [14, 18, 23, 26], "than": [14, 15], "directli": 14, "paramet": [14, 25, 26], "languag": [14, 17, 23], "overwrit": 14, "v22": [15, 16, 21, 28, 32], "cython": [15, 16], "python": [15, 16], "cxx": [15, 23], "source_fil": 15, "src1": 15, "src2": 15, "linked_librari": 15, "lib1": 15, "lib2": 15, "install_dir": 15, "install_path": 15, "module_prefix": 15, "correspond": 15, "extens": [15, 16], "its": 15, "rpath": 15, "origin": [15, 26], "rather": 15, "note": [15, 17], "assum": 15, "e": 15, "everi": [15, 24], "pyx": 15, "In": [15, 26], "usual": 15, "minimum": 15, "convert": 15, "relocat": 15, "cmake_current_source_dir": 15, "project_source_dir": 15, "A": [15, 36], "subpackag": 15, "_rapids_cython_created_target": 15, "perform": 16, "standard": [16, 18], "initi": 16, "rapids_cython_initi": 16, "cython_flag": 16, "relat": 17, "export_set": [17, 22, 26], "namespac": [17, 26, 35], "name_spac": 17, "doc_vari": 17, "final_code_block": 17, "code_block_vari": 17, "lang": 17, "fulli": [17, 32], "necessari": [17, 19, 20, 26], "completli": 17, "standalon": [17, 26], "visibil": 17, "being": [17, 23, 32], "root": [17, 36], "level": 17, "compat": 17, "compatibl": 17, "none": 17, "perfom": 17, "samemajorvers": 17, "sameminorvers": 17, "It": [17, 18, 22, 26], "rule": [17, 26, 36], "sub": [17, 24], "alarg": 17, "extern": [17, 26], "handl": [17, 26], "insid": [17, 26], "last": [17, 25], "step": 17, "block": 17, "enable_languag": [17, 23], "within": [17, 23], "mark": 17, "overcom": 17, "limit": [17, 23], "possibl": 17, "cu": 17, "target_compile_featur": 17, "public": [17, 26], "build_interfac": [17, 26], "cuda_std_17": 17, "lib_dir": 17, "destin": [17, 26], "doc_str": [17, 26], "code_str": 17, "hi": 17, "detail": 17, "guard": 17, "behind": [17, 26], "given": [18, 21, 22], "exportset": [18, 19, 20, 21], "arg": 18, "anti": 18, "most": [18, 26], "usabl": [19, 24], "espic": [19, 20], "findmodul": [19, 24], "ensur": [19, 25, 36], "cmake_module_path": [19, 24, 26], "again": [19, 24], "_root_dir": 20, "directory_path": 20, "complic": 20, "packagename_root": 20, "04": 21, "self": [22, 23], "containt": [22, 23], "better": 22, "complet": [22, 26], "imposs": 23, "seriou": 23, "black": 23, "magic": 23, "both": [23, 26], "site": 23, "entir": 23, "stack": 23, "header_nam": 24, "library_nam": 24, "include_suffix": 24, "suffix": 24, "no_config": 24, "look": [24, 25, 36], "exisit": 24, "highli": 24, "find_path": 24, "determin": [24, 36], "find_librari": 24, "start": 24, "append": 24, "order": 24, "recommend": 24, "unvers": 24, "distribut": 24, "stop": 24, "ship": 24, "folder": 24, "find_arg": 25, "caller": [25, 32, 36], "pleas": 25, "zlib": 25, "my": 25, "come": [25, 26], "case": [25, 26, 36], "keyword": [25, 26], "proper": 25, "underli": [25, 26, 28, 29, 30, 31, 32, 33, 34, 35], "One": 26, "biggest": 26, "cmakelist": 26, "txt": [26, 32], "dual": 26, "truth": 26, "increas": 26, "burden": 26, "error": [26, 31], "expand": 26, "concept": 26, "modern": 26, "map": [26, 36], "install_interfac": 26, "let": 26, "go": 26, "over": 26, "togeth": 26, "easi": 26, "thread": 26, "nlohmann_json": 26, "9": 26, "src": 26, "cpp": 26, "combin": 26, "maintain": 26, "tri": 26, "help": 26, "simplifi": 26, "process": 26, "encod": [26, 36], "veri": 26, "simillar": 26, "sai": 26, "through": 26, "why": 26, "fast": 26, "feedback": 26, "loop": 26, "avoid": 26, "re": 26, "test": [26, 29], "theori": 26, "great": 26, "best": 26, "fallback": 26, "isn": [26, 36], "forgo": 26, "_export_set": 26, "want": 26, "doc": 26, "write_basic_package_version_fil": 26, "goal": 26, "replac": 26, "boilerpl": 26, "emb": 26, "collect": [26, 27], "practis": 26, "well": 26, "behav": 26, "moreov": 26, "singl": 27, "roll": 27, "out": [27, 31], "fix": 27, "api": 27, "basic": 27, "index": 27, "page": 27, "cucollect": [28, 36], "across": [28, 29, 30, 31, 32, 33, 34, 35], "cuco": [28, 36], "add_subdirectori": [28, 29, 30, 32, 33, 34, 35], "forward": [28, 29, 30, 31, 32, 33, 34, 35], "cuco_source_dir": 28, "cuco_binary_dir": 28, "cuco_ad": 28, "cuco_vers": 28, "gtest": [29, 36], "gmock": 29, "gtest_main": 29, "gmock_main": 29, "gtest_source_dir": 29, "gtest_binary_dir": 29, "gtest_ad": 29, "gtest_vers": 29, "libcudacxx": [30, 36], "libcudacxx_source_dir": 30, "libcudacxx_binary_dir": 30, "libcudacxx_ad": 30, "libcudacxx_vers": 30, "nvbench": [31, 36], "main": 31, "nvbench_source_dir": 31, "nvbench_binary_dir": 31, "nvbench_ad": 31, "nvbench_vers": 31, "nvcomp": [32, 36], "use_proprietary_binari": 32, "ON": [32, 36], "softwar": 32, "agre": 32, "compli": 32, "term": 32, "licens": 32, "agreement": 32, "proprietari": [32, 36], "x86_64": [32, 36], "more": 32, "compar": 32, "open": 32, "platform": 32, "binari": [32, 36], "wa": 32, "fulfil": 32, "nvcomp_proprietary_binari": 32, "proprietary_binari": [32, 36], "anyth": 32, "invalid": 32, "existin": 32, "nvcomp_source_dir": 32, "nvcomp_binary_dir": 32, "nvcomp_ad": 32, "nvcomp_vers": 32, "rmm": [33, 36], "cpm_version": 33, "rmm_source_dir": 33, "rmm_binary_dir": 33, "rmm_ad": 33, "rmm_version": 33, "spdlog": [34, 36], "spdlog_header_onli": 34, "spdlog_source_dir": 34, "spdlog_binary_dir": 34, "spdlog_ad": 34, "spdlog_vers": 34, "thrust_source_dir": 35, "thrust_binary_dir": 35, "thrust_ad": 35, "thrust_vers": 35, "kei": 36, "senstiv": 36, "seen": 36, "copi": 36, "evul": 36, "cal": 36, "ver": 36, "boolean": 36, "shallow": 36, "properti": 36, "exclud": 36, "cost": 36, "them": 36, "just": 36, "cpm_download_al": 36, "dictionari": 36, "cpu": 36, "oper": 36, "queri": 36, "lower": 36, "arch": 36, "o": 36, "cmake_system_processor": 36, "cmake_system_nam": 36, "aarch64": 36, "linux": 36, "As": 36, "due": 36, "opt": 36, "therefor": 36, "use_proprietary_blob": 36, "evalu": 36, "googletest": 36, "releas": 36, "12d13bdc5e74801645eba3e46a64081b9b020dca": 36, "v2": 36, "local_instal": 36, "nvcomp_install_cuda_11": 36, "tgz": 36, "gabim": 36, "17": 36, "7": 36, "3ff2032ef1c9de1d1dfc7ed3779d8cec07346191": 36}, "objects": {"": [[2, 0, 1, "", "command:rapids_cmake_build_type"], [3, 0, 1, "", "command:rapids_cmake_install_lib_dir"], [4, 0, 1, "", "command:rapids_cmake_make_global"], [5, 0, 1, "", "command:rapids_cmake_parse_version"], [6, 0, 1, "", "command:rapids_cmake_support_conda_env"], [7, 0, 1, "", "command:rapids_cmake_write_git_revision_file"], [8, 0, 1, "", "command:rapids_cmake_write_version_file"], [9, 0, 1, "", "command:rapids_cpm_find"], [10, 0, 1, "", "command:rapids_cpm_init"], [11, 0, 1, "", "command:rapids_cpm_package_override"], [12, 0, 1, "", "command:rapids_cuda_init_architectures"], [13, 0, 1, "", "command:rapids_cuda_init_runtime"], [14, 0, 1, "", "command:rapids_cuda_set_architectures"], [15, 0, 1, "", "command:rapids_cython_create_modules"], [16, 0, 1, "", "command:rapids_cython_init"], [17, 0, 1, "", "command:rapids_export"], [18, 0, 1, "", "command:rapids_export_cpm"], [19, 0, 1, "", "command:rapids_export_find_package_file"], [20, 0, 1, "", "command:rapids_export_find_package_root"], [21, 0, 1, "", "command:rapids_export_package"], [22, 0, 1, "", "command:rapids_export_write_dependencies"], [23, 0, 1, "", "command:rapids_export_write_language"], [24, 0, 1, "", "command:rapids_find_generate_module"], [25, 0, 1, "", "command:rapids_find_package"]]}, "objtypes": {"0": "cmake:command"}, "objnames": {"0": ["cmake", "command", "CMake command"]}, "titleterms": {"api": 0, "refer": 0, "common": 0, "cpm": [0, 26], "pre": 0, "configur": 0, "packag": [0, 36], "cython": 0, "find": 0, "cuda": 0, "export": 0, "set": 0, "gener": [0, 26], "track": [0, 26], "rapid": [1, 27, 36], "cmake": [1, 26, 27, 36], "basic": 1, "instal": 1, "usag": 1, "overrid": 1, "rapids_cmake_build_typ": 2, "result": [2, 3, 5, 6, 7, 9, 14, 15, 16, 24, 28, 29, 30, 31, 32, 33, 34, 35], "variabl": [2, 3, 5, 6, 9, 14, 15, 16, 24, 28, 29, 30, 31, 32, 33, 34, 35], "rapids_cmake_install_lib_dir": 3, "rapids_cmake_make_glob": 4, "rapids_cmake_parse_vers": 5, "rapids_cmake_support_conda_env": 6, "target": [6, 7, 28, 29, 30, 31, 32, 33, 34, 35], "rapids_cmake_write_git_revision_fil": 7, "rapids_cmake_write_version_fil": 8, "rapids_cpm_find": 9, "exampl": [9, 26], "rapids_cpm_init": 10, "rapids_cpm_package_overrid": 11, "rapids_cuda_init_architectur": 12, "rapids_cuda_init_runtim": 13, "rapids_cuda_set_architectur": 14, "rapids_cython_create_modul": 15, "rapids_cython_init": 16, "rapids_export": 17, "rapids_export_cpm": 18, "rapids_export_find_package_fil": 19, "rapids_export_find_package_root": 20, "rapids_export_packag": 21, "rapids_export_write_depend": 22, "rapids_export_write_languag": 23, "rapids_find_generate_modul": 24, "rapids_find_packag": 25, "depend": 26, "find_packag": 26, "config": 26, "welcom": 27, "": 27, "document": 27, "content": 27, "indic": 27, "tabl": 27, "rapids_cpm_cuco": 28, "rapids_cpm_gtest": 29, "rapids_cpm_libcudacxx": 30, "rapids_cpm_nvbench": 31, "rapids_cpm_nvcomp": 32, "rapids_cpm_rmm": 33, "rapids_cpm_spdlog": 34, "rapids_cpm_thrust": 35, "version": 36, "format": 36, "project": 36, "object": 36, "field": 36}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})