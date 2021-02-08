function writePosition(x,y){
    var dbref = database.ref('/').set({
        x:positionX+x,
        y:positionY+y
    })
}