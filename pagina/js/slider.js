(function(){

    const sliders = [...document.querySelectorAll('.create-body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=> {
        changePosition(-1);
    });

    const changePosition = (add)=> {
        const currentCreate = document.querySelector('.create-body--show').dataset.id;

        value = Number(currentCreate);
        value += add;

        sliders[Number(currentCreate)-1].classList.remove('create-body--show');
        if(value===sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('create-body--show');
    }


})();