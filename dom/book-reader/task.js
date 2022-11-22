
const book = document.body.querySelector('#book');
const fontsSizes = Array.from(document.body.querySelectorAll('.font-size'));
const bookColors = Array.from(document.body.querySelector('.book__control_color').querySelectorAll('.color'));
const bookBackgrounds = Array.from(document.body.querySelector('.book__control_background').querySelectorAll('.color'));


function changeFontSize(evnt) {
    fontsSizes.forEach(font => {font.classList.remove('font-size_active')})
    evnt.currentTarget.classList.add('font-size_active');
    
    if(evnt.currentTarget.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }
    else if(evnt.currentTarget.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    }
    else {
        book.classList.remove('book_fs-big', 'book_fs-small');
    }
    evnt.preventDefault();
}

function changeTextColor(evnt) {
    bookColors.forEach(bookColor => {bookColor.classList.remove('color_active')})
    evnt.currentTarget.classList.add('color_active');
    if(evnt.currentTarget.classList.contains('text_color_black')) {
        book.classList.remove('book_color-whitesmoke', 'book_color-gray');
        book.classList.add('book_color-black');
    }
    else if(evnt.currentTarget.classList.contains('text_color_gray')) {
        book.classList.remove('book_color-whitesmoke', 'book_color-black');
        book.classList.add('book_color-gray');
    }
    else {
        book.classList.remove('book_color-black', 'book_color-gray');
        book.classList.add('book_color-whitesmoke');
    }
    evnt.preventDefault();

}

function changeBackgroundColor(evnt) {
    bookBackgrounds.forEach(backgroundColor => {backgroundColor.classList.remove('color_active')})
    evnt.currentTarget.classList.add('color_active');
    if(evnt.currentTarget.classList.contains('bg_color_black')) {
        book.classList.remove('book_bg-white', 'book_bg-gray');
        book.classList.add('book_bg-black');
    }
    else if(evnt.currentTarget.classList.contains('bg_color_gray')) {
        book.classList.remove('book_bg-white', 'book_bg-black');
        book.classList.add('book_bg-gray');
    }
    else {
        book.classList.remove('book_bg-black', 'book_bg-gray');
        book.classList.add('book_bg-white');
    }
    evnt.preventDefault();
}
    
fontsSizes.forEach(font => font.addEventListener('click', changeFontSize));
bookColors.forEach(color => color.addEventListener('click', changeTextColor));
bookBackgrounds.forEach(color => color.addEventListener('click', changeBackgroundColor));

