var models = [{
        name: 'BMW 418d',
        img: 'img/bmw.jpg',
        link: 'http://www.instagram.com/azadqasimzade'
    },
    {
        name: 'Honda Civic',
        img: 'img/honda.jpg',
        link: 'http://www.instagram.com/azadqasimzade'
    },
    {
        name: 'Mazda cx8',
        img: 'img/mazda.jpg',
        link: 'http://www.instagram.com/azadqasimzade'
    },
    {
        name: 'Skoda SuperB',
        img: 'img/skoda.jpg',
        link: 'http://www.instagram.com/azadqasimzade'
    },
    {
        name: 'Volvo',
        img: 'img/volvo.jpg',
        link: 'http://www.instagram.com/azadqasimzade'
    },
]
var index = 0;
var slideCount = models.length;
var interval;

var settings = {
    duration: '1500',
    random: true
}

init(settings);
document.querySelector('#btnPrev').addEventListener('click', function (e) {
    index--;
    showSlide(index);
    carsIndex();
    e.preventDefault();
});

document.querySelector('#btnNext').addEventListener('click', function (e) {
    index++;
    showSlide(index);
    carsIndex();
    e.preventDefault();
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });
});

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(interval);
    });
});

function init(timeSlide) {
    var prev;
    interval = setInterval(() => {
        if (settings.random) {
            // random index
            do {
                index = Math.floor(Math.random() * slideCount);
            } while (index == prev);
            prev = index;
            carsIndex();
        } else {
            // artan index
            if (slideCount == index) {
                index = 0;
            }
            showSlide(index);
            carsIndex();
            index++;
        }
        showSlide(index);
    }, settings.duration);
}

function showSlide(i) {
    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.card-img-top').setAttribute('src', models[index].img);
    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('#link').setAttribute('href', models[index].link);
}

function carsIndex() {
    document.querySelector('#carsIndexNo').textContent = index;
}
