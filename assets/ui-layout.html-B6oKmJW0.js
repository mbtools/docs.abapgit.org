import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as r,b as a,d as t,e as o,f as n,r as g,o as l}from"./app-CoIOM8hU.js";const d="/img/ui_top.png",h="/img/ui_header_online.png",c="/img/ui_header_offline.png",u="/img/ui_header_favorite_off.png",m="/img/ui_header_favorite_on.png",f="/img/ui_header_write_protected.png",b="/img/ui_header_background_mode.png",y="/img/ui_header_branch.png",_="/img/ui_header_tag.png",v="/img/ui_header_commit.png",k="/img/ui_footer.png",x={};function w(T,e){const i=g("RouteLink");return l(),p("div",null,[e[11]||(e[11]=r('<p>The abapGit user interface is based on HTML. Each page is structured into four sections: top, header, content, and footer.</p><h2 id="page-top" tabindex="-1"><a class="header-anchor" href="#page-top"><span>Page Top</span></a></h2><p>At the top of each page, abapGit displays its logo and the current page title on the left, and optionally menu items on the right.</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>This section is &quot;sticky&quot; and remains at the top of the page when scrolling downwards.</p><h2 id="page-header" tabindex="-1"><a class="header-anchor" href="#page-header"><span>Page Header</span></a></h2><p>Pages in abapGit that are related to a repository contain a header including essential repository information and some useful features.</p><h3 id="icon-and-description" tabindex="-1"><a class="header-anchor" href="#icon-and-description"><span>Icon and Description</span></a></h3><p>Online Repositories:</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Offline Repositories:</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository"><span>Repository</span></a></h3><p>For online repositories, abapGit shows the URL, a button to change the remote settings, a button to copy the URL, the current commit, and a button to show the changelog.</p><h3 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog</span></a></h3>',15)),a("p",null,[e[1]||(e[1]=t("abapGit allows to display the changelog of a repository and alert the user if a new release is available. You can read instructions on how to add a changelog to your own repository ")),o(i,{to:"/development-guide/read-first/changelog.html"},{default:n(()=>e[0]||(e[0]=[t("here")])),_:1}),e[2]||(e[2]=t("."))]),e[12]||(e[12]=r('<h3 id="favorite" tabindex="-1"><a class="header-anchor" href="#favorite"><span>Favorite</span></a></h3><p>An icon indicates if a repository is marked as a favorite. Click the icon to toggle the state.</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="write-protection" tabindex="-1"><a class="header-anchor" href="#write-protection"><span>Write Protection</span></a></h3><p>If a repository is protected against changes (in local settings), then the header will show a lock icon.</p><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="background-mode" tabindex="-1"><a class="header-anchor" href="#background-mode"><span>Background Mode</span></a></h3><p>For repositories that have a defined background mode (in settings), a &quot;BG&quot; icon will be shown.</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="branch-tag-commit" tabindex="-1"><a class="header-anchor" href="#branch-tag-commit"><span>Branch / Tag / Commit</span></a></h3><p>The currently selected remote is shown on the right of the header. This can be either a branch like &quot;main&quot;, a tag, or a commit (hash).</p><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Click the name to select a different branch or tag.</p><h3 id="package" tabindex="-1"><a class="header-anchor" href="#package"><span>Package</span></a></h3><p>The root package of the repository is shown on the far right. Click the name to jump to the package maintenance.</p><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>The area between header and footer is filled differently depending on the selected page or command. Some pages like the repository list and repository view contain an additional menu bar. Pages that contain input forms, use the top menu bar to switch between forms (like tabs) and a row of buttons at the bottom to select commands.</p><h2 id="page-footer" tabindex="-1"><a class="header-anchor" href="#page-footer"><span>Page Footer</span></a></h2><p>At the end of each page, abapGit displays a footer.</p><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="sponsor-us" tabindex="-1"><a class="header-anchor" href="#sponsor-us"><span>Sponsor Us</span></a></h3><p>On the left, you find a link to the <a href="https://abapgit.org/sponsor.html" target="_blank" rel="noopener noreferrer">Sponsor Us</a> page. abapGit is exclusively developed and maintained by volunteers. Any donations are highly appreciated.</p><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h3>',26)),a("p",null,[e[5]||(e[5]=t("In the middle under the abapGit logo, you see the current version of abapGit. This includes version number and a description whether you are running the ")),o(i,{to:"/user-guide/getting-started/install.html#install-standalone-version"},{default:n(()=>e[3]||(e[3]=[t("standalone")])),_:1}),e[6]||(e[6]=t(" or the ")),o(i,{to:"/user-guide/getting-started/install.html#install-developer-version"},{default:n(()=>e[4]||(e[4]=[t("developer version")])),_:1}),e[7]||(e[7]=t("."))]),e[13]||(e[13]=a("p",null,[t("Hovering of the logo shows the backend runtime of the last navigation step. Clicking the logo takes you to the "),a("a",{href:"https://abapgit.org/",target:"_blank",rel:"noopener noreferrer"},"abapGit Homepage"),t(".")],-1)),e[14]||(e[14]=a("h3",{id:"javascript",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#javascript"},[a("span",null,"JavaScript")])],-1)),a("p",null,[e[9]||(e[9]=t('On the right, a small texts shows the state of any JavaScript that may be included on the page. In general, this should show "js: OK". In case of issues, the text might show debugging information or no text at all. For details, see ')),o(i,{to:"/development-guide/user-interface/developing-ui-js.html"},{default:n(()=>e[8]||(e[8]=[t("here")])),_:1}),e[10]||(e[10]=t("."))])])}const P=s(x,[["render",w],["__file","ui-layout.html.vue"]]),S=JSON.parse('{"path":"/user-guide/getting-started/ui-layout.html","title":"UI Layout","lang":"en-US","frontmatter":{"title":"UI Layout","category":"getting-started","order":35,"description":"The abapGit user interface is based on HTML. Each page is structured into four sections: top, header, content, and footer. Page Top At the top of each page, abapGit displays its...","head":[["meta",{"property":"og:url","content":"https://docs.abapgit.org/user-guide/getting-started/ui-layout.html"}],["meta",{"property":"og:site_name","content":"abapGit Docs"}],["meta",{"property":"og:title","content":"UI Layout"}],["meta",{"property":"og:description","content":"The abapGit user interface is based on HTML. Each page is structured into four sections: top, header, content, and footer. Page Top At the top of each page, abapGit displays its..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://docs.abapgit.org/img/ui_top.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-05T08:00:06.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-05T08:00:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UI Layout\\",\\"image\\":[\\"https://docs.abapgit.org/img/ui_top.png\\",\\"https://docs.abapgit.org/img/ui_header_online.png\\",\\"https://docs.abapgit.org/img/ui_header_offline.png\\",\\"https://docs.abapgit.org/img/ui_header_favorite_off.png\\",\\"https://docs.abapgit.org/img/ui_header_favorite_on.png\\",\\"https://docs.abapgit.org/img/ui_header_write_protected.png\\",\\"https://docs.abapgit.org/img/ui_header_background_mode.png\\",\\"https://docs.abapgit.org/img/ui_header_branch.png\\",\\"https://docs.abapgit.org/img/ui_header_tag.png\\",\\"https://docs.abapgit.org/img/ui_header_commit.png\\",\\"https://docs.abapgit.org/img/ui_footer.png\\"],\\"dateModified\\":\\"2024-02-05T08:00:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"abapGit\\",\\"url\\":\\"https://github.com/abapGit\\"}]}"]]},"headers":[{"level":2,"title":"Page Top","slug":"page-top","link":"#page-top","children":[]},{"level":2,"title":"Page Header","slug":"page-header","link":"#page-header","children":[{"level":3,"title":"Icon and Description","slug":"icon-and-description","link":"#icon-and-description","children":[]},{"level":3,"title":"Repository","slug":"repository","link":"#repository","children":[]},{"level":3,"title":"Changelog","slug":"changelog","link":"#changelog","children":[]},{"level":3,"title":"Favorite","slug":"favorite","link":"#favorite","children":[]},{"level":3,"title":"Write Protection","slug":"write-protection","link":"#write-protection","children":[]},{"level":3,"title":"Background Mode","slug":"background-mode","link":"#background-mode","children":[]},{"level":3,"title":"Branch / Tag / Commit","slug":"branch-tag-commit","link":"#branch-tag-commit","children":[]},{"level":3,"title":"Package","slug":"package","link":"#package","children":[]}]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Page Footer","slug":"page-footer","link":"#page-footer","children":[{"level":3,"title":"Sponsor Us","slug":"sponsor-us","link":"#sponsor-us","children":[]},{"level":3,"title":"Version","slug":"version","link":"#version","children":[]},{"level":3,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]}]}],"git":{"createdTime":1568090070000,"updatedTime":1707120006000,"contributors":[{"name":"francisco-milan","username":"francisco-milan","email":"36721657+francisco-milan@users.noreply.github.com","commits":1,"url":"https://github.com/francisco-milan"},{"name":"Marc Bernard","username":"Marc Bernard","email":"59966492+mbtools@users.noreply.github.com","commits":5,"url":"https://github.com/Marc Bernard"},{"name":"Ludwig Stockbauer-Muhr","username":"Ludwig Stockbauer-Muhr","email":"35834861+stockbal@users.noreply.github.com","commits":1,"url":"https://github.com/Ludwig Stockbauer-Muhr"},{"name":"Lars Hvam","username":"Lars Hvam","email":"larshp@hotmail.com","commits":1,"url":"https://github.com/Lars Hvam"},{"name":"Alexander Tsybulsky","username":"Alexander Tsybulsky","email":"sbcgua@users.noreply.github.com","commits":1,"url":"https://github.com/Alexander Tsybulsky"}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"user-guide/getting-started/ui-layout.md","localizedDate":"September 10, 2019","autoDesc":true,"excerpt":"<p>The abapGit user interface is based on HTML. Each page is structured into four sections: top, header, content, and footer.</p>\\n<h2>Page Top</h2>\\n<p>At the top of each page, abapGit displays its logo and the current page title on the left, and optionally menu items on the right.</p>\\n<figure><img src=\\"/img/ui_top.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>"}');export{P as comp,S as data};