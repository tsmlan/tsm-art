
class Avatar{
    constructor(body,eyes,outfit, accessories){
        this.body = body;
        this.eyes = eyes;
        this.outfit = outfit;
        this.accessories = accessories;
    }
    
    print(){
        let x = "<img src = \"body/"+this.body+"\"><img src=\"eyes/"+this.eyes+"\">";
        if(this.hair){
            x += "<img src = \"hair/"+this.hair+"\">"
        }
        if(this.outfit){
            x += "<img src = \"outfit/"+this.outfit+"\">"
        }
        if(this.hair){
            x += "<img src = \"hairfront/"+this.hair+"\">"
        }
        document.getElementById("display").innerHTML = x ;
        /*
        if(this.acc){
            x += "<img src = \"acc/"+this.acc+"\">"
        }*/
        for(const acc of this.accessories.values()){
            if(acc.visible){
                x += "<img src = \"acc/"+acc.name+".png\" style =\"color: red;mix-blend-mode: color;mask-image:url("+acc.name+".png);\" >";
                x += "<img src = \"acc/"+acc.name+".png\">";

                
                }

        }
        document.getElementById("display").innerHTML = x ;

    }
}
class Accessory{
    constructor(name, zAxis,color,visible){
        this.name = name;
        this.zAxis = zAxis;
        this.visible = visible;
        this.color = color;
    }
    
    }
function select(choice,category){
    document.getElementById("display").innerHTML = '<img src= "'+choice+'.png">';

    switch(category){
        case "eyes":
            avatar.eyes = choice + ".png";
            avatar.print();

            break;
        case "outfit":
        avatar.outfit = choice + ".png";
        avatar.print();

        break;
        case "hair":
            if(choice + ".png" == avatar.hair)
                avatar.hair = null;
            else
                avatar.hair = choice + ".png";
            avatar.print();
            break;

        case "acc":
            tempAcc = avatar.accessories.get(choice);
            if(tempAcc.visible)
                tempAcc.visible = false;
            else    
                tempAcc.visible = true;
            
            avatar.accessories.set(choice,tempAcc);
            avatar.print();
            break;                

        default:

    }
    avatar.print();
    //document.getElementById("display").innerHTML = choice +'.png';

    

}
function printOptions(set, category){
    let text = '<div class="container">';
    
    for(const x of set){
        append =  '<button onclick="select(\''+x+'\',\''+category+'\')">'+x+'</button>';

        text += append;
        //text +="<p>dfd</p>";
    }
    text += "</div>";
    document.getElementById(category).innerHTML="<h1>"+category+"</h1>"+text;
}

const eyes = new Set(["open","closed","side"]);
const hair = new Set(["hair","spikey","bunches","jelly"]);
const outfit = new Set(["basic","casual"]);
const acc = new Set(["decora","pins"]);

const avatar = new Avatar("body.png","closed.png","basic.png",new Map());


for(const x of acc){
        avatar.accessories.set(x,new Accessory(x,1,false));
        //text +="<p>dfd</p>";
    }

avatar.print();


printOptions(eyes,"eyes");
printOptions(hair,"hair");
printOptions(outfit,"outfit");
printOptions(acc,"acc");


//document.getElementById("menu").innerHTML=text;
