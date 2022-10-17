import{_ as l,c as h,a as s,w as n,b as t,e as a,d as e,r,o as d}from"./404.md.28326229.js";const H=`{"title":"Troubleshooting Entities","description":"","frontmatter":{"title":"Troubleshooting Entities","category":"General","nav_order":3,"tags":["help"]},"headers":[{"level":2,"title":"0.0.0 - You messed up","slug":"_0-0-0-you-messed-up"},{"level":2,"title":"1.0.0 - Are both packs active?","slug":"_1-0-0-are-both-packs-active"},{"level":2,"title":"2.0.0 - Determine whether the issue is in the RP or the BP","slug":"_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp"},{"level":3,"title":"In the RP","slug":"in-the-rp"},{"level":3,"title":"In the BP","slug":"in-the-bp"},{"level":3,"title":"Results","slug":"results"},{"level":2,"title":"3.0.0 - Locating the specific issue","slug":"_3-0-0-locating-the-specific-issue"},{"level":2,"title":"3.1.0 - BP","slug":"_3-1-0-bp"},{"level":3,"title":"3.1.1 - Syntax error","slug":"_3-1-1-syntax-error"},{"level":3,"title":"3.1.2 - Misnamed folder","slug":"_3-1-2-misnamed-folder"},{"level":2,"title":"Step 3.2.0 - RP .entity","slug":"step-3-2-0-rp-entity"},{"level":3,"title":"Step 3.2.1 - Syntax error","slug":"step-3-2-1-syntax-error"},{"level":3,"title":"Step 3.2.2 - Identifiers don't match","slug":"step-3-2-2-identifiers-don-t-match"},{"level":3,"title":"Step 3.2.3 - Invalid resources","slug":"step-3-2-3-invalid-resources"},{"level":2,"title":"Step 3.3.0 - RP resources: (WIP)","slug":"step-3-3-0-rp-resources-wip"},{"level":3,"title":"3.3.1 - Invisible, no shadow","slug":"_3-3-1-invisible-no-shadow"},{"level":3,"title":"3.3.2 - Invisible, shadow exists","slug":"_3-3-2-invisible-shadow-exists"},{"level":3,"title":"3.3.3 - Visible, weird texture","slug":"_3-3-3-visible-weird-texture"},{"level":3,"title":"3.3.4 - Visible, weird visibility stuff","slug":"_3-3-4-visible-weird-visibility-stuff"}],"relativePath":"entities/troubleshooting-entities.md"}`,c={},u=a("",4),p=e("Continue"),b=t("h2",{id:"_1-0-0-are-both-packs-active",tabindex:"-1"},[e("1.0.0 - Are both packs active? "),t("a",{class:"header-anchor",href:"#_1-0-0-are-both-packs-active","aria-hidden":"true"},"#")],-1),_=t("p",null,"Make sure both the resource pack and behavior pack are active for the world (an excellent way to avoid accidentally having this issue is to set each pack as a dependency of the other in both packs' manifest.json files so that adding or removing one of the packs automatically adds/removes the other)",-1),f=e("Continue"),m=t("h2",{id:"_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp",tabindex:"-1"},[e("2.0.0 - Determine whether the issue is in the RP or the BP "),t("a",{class:"header-anchor",href:"#_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp","aria-hidden":"true"},"#")],-1),g=t("p",null,"The issue you're suffering can be narrowed down significantly by how your entity's spawn egg appears in the creative inventory. Even if you don't want the entity to have a spawn egg, make the following changes just for now until you locate the issue:",-1),y=t("h3",{id:"in-the-rp",tabindex:"-1"},[e("In the RP "),t("a",{class:"header-anchor",href:"#in-the-rp","aria-hidden":"true"},"#")],-1),v=t("p",null,"Make sure the .entity file has a custom spawn_egg object like:",-1),w=a("",4),k=a("",2),x=e("I don't see a spawn egg at all: "),T=e("Go"),q=e("I see a spawn egg for my entity, but it's just black, and the entity doesn't appear when I spawn or summon it: "),I=e("Go"),S=e("I see a spawn egg for my entity, and it has the colors I chose, but the entity still doesn't appear when I spawn or summon it: "),P=e("Go"),A=a("",24),V=e("invisible, no shadow -> bad RP reference: "),C=e("Go"),D=e("invisible, shadow exists -> geometry issue: "),E=e("Go"),N=e("visible, weird texture -> texture issue: "),R=e("Go"),j=e("visible, weird visibility stuff -> material issue: "),B=e("Go"),O=a("",7);function M(G,F,Y,L,J,$){const i=r("BButton"),o=r("CodeHeader");return d(),h("div",null,[u,s(i,{color:"blue",link:"#_1-0-0-are-both-packs-active"},{default:n(()=>[p]),_:1}),b,_,s(i,{color:"blue",link:"#_2-0-0-determine-whether-the-issue-is-in-the-rp-or-the-bp"},{default:n(()=>[f]),_:1}),m,g,y,v,s(o),w,s(o),k,t("p",null,[x,s(i,{color:"blue",link:"#_3-1-0-bp"},{default:n(()=>[T]),_:1})]),t("p",null,[q,s(i,{color:"blue",link:"#step-3-2-0-rp-entity"},{default:n(()=>[I]),_:1})]),t("p",null,[S,s(i,{color:"blue",link:"#step-3-3-0-rp-resources-still-writing-because-this-is-going-to-be-extensive"},{default:n(()=>[P]),_:1})]),A,t("ul",null,[t("li",null,[V,s(i,{link:"#_3-3-1-invisible-no-shadow",color:"blue"},{default:n(()=>[C]),_:1})]),t("li",null,[D,s(i,{link:"#_3-3-2-invisible-shadow-exists",color:"blue"},{default:n(()=>[E]),_:1})]),t("li",null,[N,s(i,{link:"#_3-3-3-visible-weird-texture",color:"blue"},{default:n(()=>[R]),_:1})]),t("li",null,[j,s(i,{link:"#_3-3-4-visible-weird-visibility-stuff",color:"blue"},{default:n(()=>[B]),_:1})])]),O])}var X=l(c,[["render",M]]);export{H as __pageData,X as default};
