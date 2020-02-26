// ID SELECTOR
const item1 = document.getElementById("item1");
item1.addEventListener("click", () => {
    //console.log("Touch")
    anime({
        targets: '#item1',
        duration: 5000,
        translateX: 270
    });
})

// DOM NODE / NODELIST
var elements = document.getElementById('item2');
elements.addEventListener('click', () => {
    var property = {
        x: 270
    }
    anime({
        targets: elements,
        translateX: property.x,
        delay: anime.stagger(100)
    });

})


var item3 = document.getElementById("item3")

item3.addEventListener('click', () => {
    anime({
        targets: '#item3',
        translateX: {
            value: [270],
            duration: 2500
        },
        rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine'
        },
        scale: {
            value: 2,
            duration: 1600,
            delay: 800,
            easing: 'easeInOutQuart'
        },
        borderRadius: {
            value: ['0%', '50%'],
            delay: 500,
            duration: 5000
        },
        //delay: 250, // All properties except 'scale' inherit 250ms delay
    });
})

var item4 = document.getElementById("item4")

item4.addEventListener('click', () => {
    anime({
        targets: '#item4',
        translateX: '50vw',
        width: '50%', // -> from '50px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        rotate: {
            value: 360,
            duration: 1800,
            easing: 'easeInOutSine'
        },
    })
})

var item5 = document.getElementById("item5")

item5.addEventListener('click', () => {
    anime({
        targets: '#item5',
        keyframes: [
            { translateY: -40, },
            { translateX: 250 },
            { translateY: 40 },
            { translateX: 0 },
            { translateY: 0 }
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
    })
})

anime({
    targets: '.lines path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function (el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
});
