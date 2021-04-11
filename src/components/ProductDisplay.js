app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }

    },
   template :
 /*html*/
   `
   <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <!-- put image here-->
                    <img :src="image" alt="A blue cover"> 
                </div>
                <div class="product-info">
                    <h1> {{ title }} </h1>
                    <p v-if="inStock"> موجود است</p>
                   <!-- <p v-else-if="inventory <= 10 && inventory > 0">عدد در انبار موجود است {{inventory}}</p>-->
                    <p v-else>ناموجود</p>
                    <p> هزینه ارسال {{shipping}}</p>
                    <ul>
                        <li v-for="detail in details"> {{ detail}} </li>
                    </ul>
                    <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                     :style="{backgroundColor: variant.color}" class = "color-circle">
                    </div>
                    <button class="button" :class = " {disabledButton: !inStock} " @click="addToCart" :disabled="!inStock">اضافه به سبد خرید</button>
                </div>
            </div>
        </div>
   ` ,
   data () {
    return {
        brand: 'TL',
        product: 'کاور موبایل',
        selectedVariant: 0,
        details: ['زیبا', 'پلاستیک سخت', 'مقاوم در برابر ضربه'],
        variants: [
            {id: 1, color: 'blue', image: './assets/images/cover_blue.jpg', quantity: 20},
            {id: 2, color: 'red', image: './assets/images/cover_red.jpg', quantity: 0}
        ]

    }
},
methods: {
    addToCart() {
        this.cart++
    },
    updateVariant(index) {
        this.selectedVariant = index
    }
},
computed: {
    title() {
        return this.product + ' ' + this.brand
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    shipping() {
        if (this.premium) { return "رایگان"
    }
         return '80000'
    }
}
})