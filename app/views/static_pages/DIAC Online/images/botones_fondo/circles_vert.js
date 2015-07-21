if(typeof(loc)=="undefined"||loc==""){var loc="";if(document.body&&document.body.innerHTML){var tt=document.body.innerHTML.toLowerCase();var last=tt.indexOf("circles_vert.js\"");if(last>0){var first=tt.lastIndexOf("\"",last);if(first>0&&first<last)loc=document.body.innerHTML.substr(first+1,last-first-1);}}}

var bd=0
document.write("<style type=\"text/css\">");
document.write("\n<!--\n");
document.write(".circles_vert_menu {border-color:black;border-style:solid;border-width:"+bd+"px 0px "+bd+"px 0px;background-color:#ff0000;position:absolute;left:0px;top:0px;visibility:hidden;}");
document.write("a.circles_vert_plain:link, a.circles_vert_plain:visited{text-align:left;background-color:#ff0000;color:#ffffff;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:11pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("a.circles_vert_plain:hover, a.circles_vert_plain:active{background-color:#0080ff;color:#ffffff;text-decoration:none;border-color:black;border-style:solid;border-width:0px "+bd+"px 0px "+bd+"px;padding:2px 0px 2px 0px;cursor:hand;display:block;font-size:11pt;font-family:Arial, Helvetica, sans-serif;}");
document.write("\n-->\n");
document.write("</style>");

var fc=0xffffff;
var bc=0x0080ff;
if(typeof(frames)=="undefined"){var frames=0;}

startMainMenu("",0,0,1,0,0)
mainMenuItem("circles_vert_b1",".gif",26,134,loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/index.htm","","home",2,2,"circles_vert_plain");
mainMenuItem("circles_vert_b2",".gif",26,134,loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/teoria/desenho_tecnico.htm","","desenho_tecnico",2,2,"circles_vert_plain");
mainMenuItem("circles_vert_b3",".gif",26,134,loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/autocad_2000i.htm","","autocad",1,2,"circles_vert_plain");
mainMenuItem("circles_vert_b4",".gif",26,134,loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/passo_passo.htm","","passo_passo",1,2,"circles_vert_plain");
mainMenuItem("circles_vert_b5",".gif",26,134,loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/outros_site!!!.htm","","sites",2,2,"circles_vert_plain");
mainMenuItem("circles_vert_b6",".gif",26,134,"javascript:;","","Professora",2,2,"circles_vert_plain");
endMainMenu("",0,0);

startSubmenu("circles_vert_b4","circles_vert_menu",197);
submenuItem("Formato A4",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_formato_a4.htm","","circles_vert_plain");
submenuItem("Área de Trabalho",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_area_trabalho.htm","","circles_vert_plain");
submenuItem("Vistas Ortográficas",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_desenhando_as_vistas_ortografica.htm","","circles_vert_plain");
submenuItem("Desenhando em 3D",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_desenhando_objetos_em_3d.htm","","circles_vert_plain");
submenuItem("Vistas em 2D do modelo 3D",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_criando_vistas_ortograficas_de_3D.htm","","circles_vert_plain");
submenuItem("Imprimindo o trabalho",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/p_p_imprimindo_no_paper_space.htm","","circles_vert_plain");
endSubmenu("circles_vert_b4");

startSubmenu("circles_vert_b3","circles_vert_menu",167);
submenuItem("Apresentação",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/conh_autocad.htm","","circles_vert_plain");
submenuItem("Configurações",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/gerenciamento.htm","","circles_vert_plain");
submenuItem("Entidades Geométricas",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/criacao_entidade.htm","","circles_vert_plain");
submenuItem("Modificadores",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/modificadores.htm","","circles_vert_plain");
submenuItem("Dimensionamento",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/dimensionamento.htm","","circles_vert_plain");
submenuItem("Plotagem",loc+"file:///C:/Meus documentos/Minhas Webs/Web Expressao Grafica/autocad/plotagem.htm","","circles_vert_plain");
endSubmenu("circles_vert_b3");

loc="";
