Vue.component('slider',{
    data: function(){
        return {
            sliders:[
                {
                    id:1,
                    id_attr: "block1",
                    width:"500px",
                    order:1,

                },
                {
                    id:2,
                    id_attr: "block2",
                    width:"0",
                    order:2,
                    
                },
                {
                    id:3,
                    id_attr: "block3",
                    width:"0",
                    order:3,
                    
                },
                {
                    id:4,
                    id_attr: "block4",
                    width:"0",
                    order:4,
                    
                },
                {
                    id:5,
                    id_attr: "block5",
                    width:"0",
                    order:5,
                    
                },
                {
                    id:6,
                    id_attr: "block6",
                    width:"0",
                    order:6,
                    
                },
            ]
        }
    },
    methods:{
        hendlerRight(){
            let sliderBlock = document.querySelector(".slider-block")
            console.log(sliderBlock.style.flexDirection)
            if(sliderBlock.style.flexDirection != "row-reverse"){
                sliderBlock.style.flexDirection = "row-reverse";
            }
            let obj = null;
            for(item of this.sliders){
                if(item.width == "500px" && item.id != this.sliders.length){
                    obj = this.sliders.find(el =>{return el.id==item.id+1});
                    obj.width = "500px";
                    item.width="0";
                    item.order = obj.order;
                    obj.order = 1;
                    return
                    
                } else if(item.width == "500px" && item.id == this.sliders.length){
                    let obj1 = this.sliders.find(el =>{return el.id==1});
                    obj1.width = "500px";
                    item.width="0";
                    obj1.order = 1;
                    item.order = this.sliders.length;
                    for(el of this.sliders){
                        el.order = el.id;
                    }
                    return
                    
                }
            }
        },

        hendlerLeft(){
            let sliderBlock = document.querySelector(".slider-block")
            console.log(sliderBlock.style.flexDirection)
            if(sliderBlock.style.flexDirection != "row"){
                sliderBlock.style.flexDirection = "row";
            }
            let obj = null;
            for(item of this.sliders){
                if(item.width == "500px" && item.id == 1){
                    obj = this.sliders.find(el =>{return el.id==this.sliders.length});
                    obj.width = "500px";
                    item.width="0";
                    item.order = obj.order;
                    obj.order = 1;
                    return
                    
                } else if(item.width == "500px" && item.id != 1){
                    let obj1 = this.sliders.find(el =>{return el.id==item.id - 1});
                    obj1.width = "500px";
                    item.width="0";
                    item.order = obj1.order;
                    obj1.order = 1;
                    for(el of this.sliders){
                        el.order = el.id;
                    }
                    return
                    
                }
            }
        }    

    },


    template:
        `<div class="slider-app">
            <button class="button left" v-on:click="hendlerLeft"><</button>
            <div class="slider-block">
                <div class="slider-item" v-for="slide of sliders" :key="slide.id" :id="slide.id_attr" :style="{width: slide.width, order: slide.order}"></div>
            </div>
            <button v-on:click="hendlerRight" class="button right">></button>
        </div>`
    ,
})

