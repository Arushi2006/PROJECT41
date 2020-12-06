class umbrella
{
   constructor(x,y)
   {
       var options=
       {
         
       }
       this.body = Bodies.circle(x, y,radius, options);
       this.body.addImage("umbrella",umbrellaImage);
        this.radius = radius;
        World.add(world,this.body);
    }

   display()
   {
    imageMode(CENTER);
    image(this.image,1000,200, this.radius);
   }
}