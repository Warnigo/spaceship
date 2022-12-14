function my_spaceship(string) {
    var x = 0
    var y = 0;
    var own = 'up'
    let space = ['up', 'right','down', 'left']
    

    for (i in string){
        el = string[i]

        if(el == "R"){
            index =space.indexOf(own) + 1
            if (index < space.length && index > -1){
                own = space[index]
            }
            else{
                index = 0
                own =space[own]
            }
        }
        else if (el =="L"){
            index =space.indexOf(own) -1
            if (index < space.length && index > -1){
                own = space[index]
            }
            
            else {
                    index = 3
                    own = space[index]
                }
        }
        else if (el =="A"){
            if (own == "up")y--
            else if (own== "down")y+=1
            else if (own== "left")x-=1
            else if (own== "right")x+=1
        }
    }
    return "{x: "+ x + ", y: " + y + ", direction: '" + own + "'}"
}
