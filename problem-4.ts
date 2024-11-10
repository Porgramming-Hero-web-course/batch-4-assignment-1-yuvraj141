{
    type Circle={
        shape:'circle',
        radius:number,
    }
    type Rectangle={
    shape:'rectangle',
    width:number,
    height:number
    }
    type ShapeArea=Circle |Rectangle

    function calculateShapeArea(area:ShapeArea){
        if(area.shape==='circle'){
            return 3.1416*area.radius*area.radius
    
        }else if(area.shape==='rectangle'){
       return   area.width*area.height
        }
    }
const circle=calculateShapeArea({shape:'circle',radius:5})
//console.log(circle);
const rectangle=calculateShapeArea({shape:'rectangle',height:4,width:6})
//console.log(rectangle);
}