class Chain {

   constructor(body1,body2, offsetX, offsetY )
   {
 this.offsetX = offsetX
 this.offsetY = offsetY
 var options ={
 bodyA : body1,
 bodyB : body2,
 stiffness : 0.1, 
   length : 500,
piontB:{x:this.offsetX, y:this.offsetY}
 }
 

 
   this.chain = Constraint.create(options); 
   World.add(world,this.chain);
   
   
   }
   display(){
     
   var pointA = this.chain.bodyA.position;
   var pointB = this.chain.bodyB.position;
   var x = pointB.x + this.offsetX;
    line(pointA.x,pointA.y,x,pointB.y );
   }
}