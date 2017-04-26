!function e(t,n,r){function d(a,o){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!o&&l)return l(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+a+"'")}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return d(n||e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)d(r[a]);return d}({1:[function(e,t,n){d3.json("./data/pollster.json",function(e,t){function n(e,t,n,r){d3.select(e).selectAll(".card").sort(function(e,t){if("pollster"==n){if("descend"==r)return d3.descending(e.pollster,t.pollster);if("ascend"==r)return d3.ascending(e.pollster,t.pollster)}if("updated"==n){if("descend"==r)return d3.descending(e.index,t.index);if("ascend"==r)return d3.ascending(e.index,t.index)}if("clinton"==n){if("descend"==r)return d3.descending(e.clinton,t.clinton);if("ascend"==r)return d3.ascending(e.clinton,t.clinton)}if("trump"==n){if("descend"==r)return d3.descending(e.trump,t.trump);if("ascend"==r)return d3.ascending(e.trump,t.trump)}if("undecided"==n){if("descend"==r)return d3.descending(e.undecided,t.undecided);if("ascend"==r)return d3.ascending(e.undecided,t.undecided)}if("observations"==n){if("descend"==r)return d3.descending(e.observations,t.observations);if("ascend"==r)return d3.ascending(e.observations,t.observations)}if("spread"==n){if("descend"==r)return d3.descending(e.spread,t.spread);if("ascend"==r)return d3.ascending(e.spread,t.spread)}if("mode"==n){if("descend"==r)return d3.descending(e.mode,t.mode);if("ascend"==r)return d3.ascending(e.mode,t.mode)}}).transition().duration(500)}function r(e,t,n){var r=[],d=[],i=[],a=[],o=[],l=[],s=[],c=[];r[0]="clinton_x",d[0]="trump_x",i[0]="u_x",a[0]="o_x",o[0]="Clinton",l[0]="Trump",s[0]="Undecided/Other",c[0]="Other";for(var u=1,f=0;f<t.length;f++)t[f].pollster==n&&(r[u]=new Date(t[f].entry_date),d[u]=d3.time.format("%m-%d-%Y")(new Date(t[f].entry_date)),i[u]=d3.time.format("%m-%d-%Y")(new Date(t[f].entry_date)),a[u]=d3.time.format("%m-%d-%Y")(new Date(t[f].entry_date)),o[u]=t[f].clinton,l[u]=t[f].trump,s[u]=t[f].undecided,c[u]=t[f].other,u++);var m={top:20,right:30,bottom:20,left:40};c3.generate({bindto:e,padding:m,point:{r:3},data:{x:"clinton_x",colors:{Clinton:"#3F88C5",Trump:"#8C1B17","Undecided/Other":"#888888"},columns:[r,o,l,s],type:"line"},axis:{y:{max:.55,min:0,padding:{bottom:0,top:0},tick:{count:3,values:[0,.25,.55],format:d3.format("%")}},x:{type:"timeseries",tick:{format:"%m-%d-%Y",count:3,multiline:!1}}},tooltip:{contents:function(e,n,r,d){var i,a,o,l,s,c,u=this,f=u.config,m=f.tooltip_format_title||n,p=f.tooltip_format_name||function(e){return e},v=f.tooltip_format_value||r;for(a=0;a<e.length;a++)if(e[a]&&(e[a].value||0===e[a].value)){i||(o=m?m(e[a].x):e[a].x,i="<table class='"+u.CLASS.tooltip+"'>"+(o||0===o?"<tr><th colspan='2'>"+o+"</th></tr>":""));var h="";s=p(e[a].name),l=v(e[a].value,e[a].ratio,e[a].id,e[a].index),c=u.levelColor?u.levelColor(e[a].value):d(e[a].id);for(var g=0;g<t.length&&d3.time.format("%m-%d-%Y")(new Date(t[g].entry_date))!=o;g++);"Undecided/Other"!=s&&(h=""),i+="<tr class='"+u.CLASS.tooltipName+"-"+e[a].id+"'>",i+="<td class='name'><span style='background-color:"+c+"'></span>"+s+"</td>",i+="<td class='value'>"+l+"</td>",i+="</tr><tr>",i+=h,i+="</tr>"}return i+"</table>"}}});$("#clintonMN").html(d3.format("%")(t[t.length-1].clinton)),$("#trumpMN").html(d3.format("%")(t[t.length-1].trump)),$("#otherMN").html(d3.format("%")(t[t.length-1].undecided))}var d=t.pollster;$(".filter").click(function(){$(".filter").removeClass("selected3"),$(this).addClass("selected3")}),$("#mn").click(function(){$(".poll").hide(),$("#mnpolls").show()}),$("#us").click(function(){$(".poll").hide(),$("#uspolls").show()}),$(".th").click(function(){if($(".th").removeClass("selected"),$(this).addClass("selected"),$(this).hasClass("toggled")){$(this).removeClass("toggled");var e="ascend"}else if($(this).hasClass("selected")){$(this).addClass("toggled");var e="descend"}n("#pollTable",d,$(this).attr("data"),e),n("#pollTableUS",d,$(this).attr("data"),e)}),r("#stribChart",d,"Star Tribune Minnesota Poll"),r("#irChart",d,"Ipsos/Reuters"),r("#mcChart",d,"Morning Consult"),r("#gcsChart",d,"Google Consumer Surveys"),r("#wapoChart",d,"UPI/CVOTER International"),r("#kstpChart",d,"SurveyUSA/KSTP-TV"),function(e,t){d3.select(e).selectAll(".card").data(t.sort(function(e,t){return d3.descending(e.entry_date,t.entry_date)})).enter().append("div").attr("class",function(e){return"card"}).html(function(e){var t=d3.scale.linear().domain([0,1]).range(["#ABCEE8","#3f88c5"]),n=d3.scale.linear().domain([0,1]).range(["#C68985","#8C1B17"]),r=d3.scale.linear().domain([0,1]).range(["#CCC","#636363"]);if(d3.scale.linear().domain([0,1]).range(["#C7E5B5","#118241"]),e.spread<0)var d="#8C1B17",i=d3.format("+.0f")(e.spread*-1)+" Trump";else if(0==e.spread)var d="#aaaaaa",i="EVEN";else var d="#3F88C5",i=d3.format("+.0f")(e.spread)+" Clinton";return"<div class='cell first'><a href='"+e.source_url+"' target='new_'>"+e.pollster+"</a></div><div class='cell kill first'>"+d3.time.format("%m/%d/%Y")(new Date(e.start_date))+"-"+d3.time.format("%m/%d/%Y")(new Date(e.end_date))+"</div><div class='cell kill'>"+e.observations+" "+e.population+"</div><div class='cell kill'>"+e.mode+"</div><div class='cell major' style='background-color:"+t(e.clinton)+"'>"+d3.format("%")(e.clinton)+"</div><div class='cell major' style='background-color:"+n(e.trump)+"'>"+d3.format("%")(e.trump)+"</div><div class='cell major' style='background-color:"+r(e.undecided)+"'>"+d3.format("%")(e.undecided)+"</div><div class='cell kill spread' style='color:"+d+"'>"+i+"</div>"}),$("#filter_box, #filter_box2").keyup(function(e){$(".card").hide();var t=$(this).val();$(".card").each(function(){$(this).text().toUpperCase().indexOf(t.toUpperCase())!=-1&&$(this).show()})})}("#pollTable",d)})},{}]},{},[1]);