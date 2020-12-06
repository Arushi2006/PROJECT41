class drop
{
   constructor(x,y)
   {
       var options=
       {
         
       }
       this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        World.add(world,this.body);

        for(var i=0;i<maxDrops;i++)
        {
          drops.push(new createDrop(random(0,400),random(0,400))); 
        }
   }

   update()
   {
     if(this.body>=1200)
     {
      var reposition=(randomNumber(50,400));
     }
   }


   display()
   {
      ellipse();
   }
}

  