import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,b as a,d as t,e as i,f as s,a as n,r as c,o as p}from"./app-CoIOM8hU.js";const d={};function h(m,e){const o=c("RouteLink");return p(),l("div",null,[e[15]||(e[15]=a("h2",{id:"folders",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#folders"},[a("span",null,"Folders")])],-1)),a("p",null,[e[1]||(e[1]=t("abapGit is mapping SAP packages and sub-packages to folders in the git repository. There are three options for defining the folder logic (mapping mode) which are described in the ")),i(o,{to:"/user-guide/repo-settings/dot-abapgit.html#folder-logic"},{default:s(()=>e[0]||(e[0]=[t("Repository Settings")])),_:1}),e[2]||(e[2]=t("."))]),e[16]||(e[16]=n('<p>The correct setting (<code>Prefix</code>, <code>Mixed</code>, or <code>Full</code>) for your system typically depends on the name of the target package for the repository as well as your naming conventions.</p><h3 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations"><span>Limitations</span></a></h3><p>When creating a repository for your own package(s) or installing a third-party repository, the setting (when you create the repository in your system) does not have to match the setting defined in the third-party repository. However, not all possible combinations are possible due to the length restrictions of SAP package names.</p><p>For example, if your target package name is already 20 characters long, installing a repository with mode <code>Prefix</code> and folder names longer than 10 characters will lead to an error message since the resulting sub-package name will become too long.</p><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h3><p><code>Unexpected package naming ({ package }). You might switch the folder logic</code></p><p><code>Folder logic: length = 0, parent: { parent_package }, child: { package }</code></p><p>If these errors occur, then the package hierarchy cannot be converted to a folder structure for the given folder logic. First, try to use a different folder logic. If this does not work, change the naming conventions and possibly use a starting package with a shorter name.</p><p><code>Package { package } exceeds ABAP 30-characters name limit</code></p><p>Try to use a starting package with a shorter name. If this does not work, use a different folder logic.</p><p><code>Package { package } has a sub-package with the same name</code></p><p>This error can happen if you try to install a repository with folder logic <code>Prefix</code> into a system where you selected folder logic <code>Full</code>. Try using <code>Prefix</code> as in the original repository.</p><h3 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h3><p>The mapping is implemented in class <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_folder_logic.clas.abap" target="_blank" rel="noopener noreferrer"><code>zcl_abapgit_folder_logic</code></a>, methods <code>package_to_path</code> (SAP to Repo) and <code>path_to_package</code> (Repo to SAP).</p><h2 id="files" tabindex="-1"><a class="header-anchor" href="#files"><span>Files</span></a></h2>',15)),a("p",null,[e[4]||(e[4]=t("abapGit is mapping SAP objects and object parts to files in the git repository. For each object (for ")),i(o,{to:"/user-guide/reference/supported.html"},{default:s(()=>e[3]||(e[3]=[t("supported object types")])),_:1}),e[5]||(e[5]=t("), at least one file is being created. Often there are two files, one containing the object metadata and one containing the coding. Some objects are split into several files to allow for easier editing and change tracking in git."))]),e[17]||(e[17]=n('<p>For example, DDIC objects are mapped to one file, programs are mapped to two files, and classes as well as function groups are mapped to several files.</p><p>Filenames have the following convention:</p><p><code>&lt;object name&gt;.&lt;object type&gt;.&lt;extension&gt;</code> or <code>&lt;object name&gt;.&lt;object type&gt;.&lt;object part&gt;.&lt;extension&gt;</code></p><p>The common extensions are <code>.xml</code> and <code>.json</code> for metadata as well as <code>.abap</code> for any coding. Other extensions are possible and used, for example, for MIME objects.</p><p>You can find examples for most object types in the <a href="https://github.com/abapGit-tests" target="_blank" rel="noopener noreferrer">abapGit Test Repositories</a>.</p><p>The metadata is stored either in XML or JSON format. JSON format has been introduced for some objects and is based on the <a href="https://github.com/SAP/abap-file-formats" target="_blank" rel="noopener noreferrer">ABAP File Format</a>.</p><h3 id="special-cases" tabindex="-1"><a class="header-anchor" href="#special-cases"><span>Special Cases</span></a></h3><p>There are some files with special meaning:</p>',8)),a("ol",null,[a("li",null,[e[9]||(e[9]=a("p",null,[a("code",null,".abapgit.xml")],-1)),a("p",null,[e[7]||(e[7]=t("This file contains ")),i(o,{to:"/user-guide/repo-settings/dot-abapgit.html"},{default:s(()=>e[6]||(e[6]=[t("meta information")])),_:1}),e[8]||(e[8]=t(" of the abapGit project. The file must be located in the root folder of the git repository."))])]),a("li",null,[e[13]||(e[13]=a("p",null,[a("code",null,".apack-manifest.xml")],-1)),a("p",null,[e[11]||(e[11]=t("This is an optional file which can be used to define ")),i(o,{to:"/user-guide/reference/apack.html"},{default:s(()=>e[10]||(e[10]=[t("package dependencies")])),_:1}),e[12]||(e[12]=t(" for your project."))])]),e[14]||(e[14]=n("<li><p><code>package.devc.xml</code></p><p>abapGit repositories do not store any SAP package names. Only the package metadata is stored in these XML files. When installing a repository, abapGit will map the folder names to the SAP packages (see above).</p></li><li><p><code>#namespace#</code> or <code>(namespace)</code></p><p><code>/NAMESPACE/</code> in SAP object names is mapped to <code>#namespace#</code> in XML filenames and <code>(namespace)</code> in JSON filenames.</p></li>",2))]),e[18]||(e[18]=n('<h3 id="limitations-1" tabindex="-1"><a class="header-anchor" href="#limitations-1"><span>Limitations</span></a></h3><p>Git has a limit of 4096 characters for filenames. This is way more than required and allowed for many object names in SAP systems. Therefore, creating files directly in git (manually or via automation) is limited by the possible object names in SAP systems. It&#39;s highly recommended to always create objects in an SAP system and then push them to the repository.</p><p>Some characters used in SAP object names are not allowed in git filenames. Also, some characters in object names cause problems when identifying the object later. Therefore, abapGit will escape such characters. Examples: <code>%, #, ., =, ?, &lt;, &gt;</code>.</p><p>There are cases where the name of an object is <em>not</em> unique across systems. This is usually the case if the object name is generated by the SAP system when creating the object. Examples are object names based on GUIDs or number ranges. abapGit will map such object names to a unique, system-independent identifier. Example: ICF Services (<code>SICF</code>).</p><h3 id="troubleshooting-1" tabindex="-1"><a class="header-anchor" href="#troubleshooting-1"><span>Troubleshooting</span></a></h3><p>It&#39;s possible that SAP object names contain characters that are not valid for git filenames. In such a case, please open an <a href="https://github.com/sbcgua/ajson/issues" target="_blank" rel="noopener noreferrer">issue</a>.</p><h3 id="technical-details-1" tabindex="-1"><a class="header-anchor" href="#technical-details-1"><span>Technical Details</span></a></h3><p>The mapping is implemented in class <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_filename_logic.clas.abap" target="_blank" rel="noopener noreferrer"><code>zcl_abapgit_filename_logic</code></a>, methods <code>object_to_file</code> (SAP to Repo) and <code>file_to_object</code> (Repo to SAP).</p><h2 id="related-checks" tabindex="-1"><a class="header-anchor" href="#related-checks"><span>Related Checks</span></a></h2><p><code>Changed package assignment for object { type } { name }</code></p><p>If an object is assigned to a different package/folder in the repository, abapGit will show a warning. Pulling such objects will automatically reassign the object to the new package.</p><p><code>Files for object { type } { name } are not placed in the same folder</code></p><p>For objects that are split into several files, all files must be included in the same folder. This can happen if files are moved manually in Git. To resolve the issue, move the files to the same folder in Git.</p><p><code>Package { package } already exists but is not a sub-package of { top package }. Check your package and folder logic, and either assign { package } to the package hierarchy of { top package } or remove package { package } from the repository.</code></p><p>If a package already exists but is not included in the package hierarchy of the package assigned to the repository, then a manual change of the package is required i.e. setting a parent package to the repo package (or one of its sub-packages). We don&#39;t do this automatically since it&#39;s not clear where in the hierarchy the new package should be located or whether the sub package shall be removed from the repo.</p><p><code>Package and path do not match for object { type } { name }</code></p><p>This warning can happen if an object that is part of the repository exists already in the SAP system but is <em>not</em> included in the package hierarchy. Either delete the object (and pull it from the repo afterward) or assign it to a package in the hierarchy.</p><p><code>Multiple files with same filename { filename }</code></p><p>Aside from the special name for packages (<code>package.devc.xml</code>) all filenames in the repository (under the starting folder) must be unique. If this is not the case, rename the files accordingly.</p><p><code>Filename is empty for object { type } { name }</code></p><p>Unknown causes. Open an <a href="https://github.com/sbcgua/ajson/issues" target="_blank" rel="noopener noreferrer">issue</a>.</p><p><code>Namespace { namespace } does not exist. Pull it first (or create it in transaction SE03)</code></p><p>If repository objects are based on a namespace, the namespace must be created first before other objects can be pulled. Either pull <em>only</em> the namespace or create the namespace in transaction <code>SE03</code> manually.</p><p><code>Namespace { namespace } is not modifiable. Check it in transaction SE03</code></p><p>Set the namespace to <code>modifiable</code> in transaction <code>SE03</code>.</p><p><code>Package { package } is not in namespace { namespace }. Remove repository and use a different package</code></p><p>The root package of a repository must adhere to the naming convention of the namespace used in the repository. Use &quot;Advanced &gt; Remove&quot; to remove the repository and create the repository again with a package name that begins with <code>/namespace/</code>.</p><h3 id="technical-details-2" tabindex="-1"><a class="header-anchor" href="#technical-details-2"><span>Technical Details</span></a></h3><p>The checks are implemented in class <a href="https://github.com/abapGit/abapGit/blob/main/src/objects/core/zcl_abapgit_file_status.clas.abap" target="_blank" rel="noopener noreferrer"><code>zcl_abapgit_file_status</code></a>.</p>',29))])}const u=r(d,[["render",h],["__file","folders-filenames.html.vue"]]),b=JSON.parse('{"path":"/user-guide/reference/folders-filenames.html","title":"Folders & Files","lang":"en-US","frontmatter":{"title":"Folders & Files","category":"reference","order":78,"description":"Folders abapGit is mapping SAP packages and sub-packages to folders in the git repository. There are three options for defining the folder logic (mapping mode) which are describ...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/user-guide/reference/folders-filenames.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"Folders & Files"}],["meta",{"property":"og:description","content":"Folders abapGit is mapping SAP packages and sub-packages to folders in the git repository. There are three options for defining the folder logic (mapping mode) which are describ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-27T21:52:34.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-27T21:52:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Folders & Files\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-27T21:52:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"Folders","slug":"folders","link":"#folders","children":[{"level":3,"title":"Limitations","slug":"limitations","link":"#limitations","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]},{"level":3,"title":"Technical Details","slug":"technical-details","link":"#technical-details","children":[]}]},{"level":2,"title":"Files","slug":"files","link":"#files","children":[{"level":3,"title":"Special Cases","slug":"special-cases","link":"#special-cases","children":[]},{"level":3,"title":"Limitations","slug":"limitations-1","link":"#limitations-1","children":[]},{"level":3,"title":"Troubleshooting","slug":"troubleshooting-1","link":"#troubleshooting-1","children":[]},{"level":3,"title":"Technical Details","slug":"technical-details-1","link":"#technical-details-1","children":[]}]},{"level":2,"title":"Related Checks","slug":"related-checks","link":"#related-checks","children":[{"level":3,"title":"Technical Details","slug":"technical-details-2","link":"#technical-details-2","children":[]}]}],"git":{"createdTime":1662554440000,"updatedTime":1693173154000,"contributors":[{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":6,"url":"https://github.com/Marc Bernard"},{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"}]},"readingTime":{"minutes":4.3,"words":1291},"filePathRelative":"user-guide/reference/folders-filenames.md","localizedDate":"September 7, 2022","autoDesc":true,"excerpt":"<h2>Folders</h2>\\n<p>abapGit is mapping SAP packages and sub-packages to folders in the git repository. There are three options for defining the folder logic (mapping mode) which are described in the <a href=\\"/user-guide/repo-settings/dot-abapgit.html#folder-logic\\" target=\\"_blank\\">Repository Settings</a>.</p>"}');export{u as comp,b as data};