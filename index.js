window.onload = function counter() {
    // DOM Variables
    const countCharacter = document.querySelector('.count_character')
    const countWord = document.querySelector('.count_word')
    const countPageEN = document.querySelector('.count_page-en')
    const countPageJA = document.querySelector('.count_page-ja')
    const textarea = document.querySelector('.input')
    const submit = document.querySelector('.buttons_count')
    const clear = document.querySelector('.buttons_clear')

    // Click submit to generate character count, word count, and page counts

    submit.addEventListener('click', () => {
        const text = textarea.value
        // Check to confirm that there is text inside of the textarea
        if (text === '') {
            textarea.value = 'Please enter text'
        } else {
            // Character count
            const characters = text.length
            countCharacter.innerText = characters
            // Word count
            countWord.innerText = text.match(
                /[\u{3005}-\u{3096}\u{30A1}-\u{30FF}\u{303B}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{D840}-\u{D87F}\u{0027}\u{002D}\w]+/gu
            ).length
            // Page count (Times New Roman)
            countPageEN.innerText = (characters / 3000).toFixed(2)
            // Page count (Yue Mincho)
            countPageJA.innerText = (characters / 1440).toFixed(2)
        }
    })

    // Clicking clear erases the content
    clear.addEventListener('click', () => {
        // Reset the textarea
        textarea.value = ''
        // Reset the counts
        countCharacter.innerText = 0
        countWord.innerText = 0
        countPageEN.innerText = 0
        countPageJA.innerText = 0
    })

    // Switching color modes
    const colorMode = document.querySelector('.color-mode')
    const stylesheet = document.querySelector('link')
    colorMode.addEventListener('click', () => {
        if (
            colorMode.innerHTML ===
            'Switch to Light Mode.<br>ライトモードに切り替えます。'
        ) {
            colorMode.innerHTML =
                'Switch to Dark Mode.<br>ダークモードに切り替えます。'
            stylesheet.href = 'light.css'
        } else {
            colorMode.innerHTML =
                'Switch to Light Mode.<br>ライトモードに切り替えます。'
            stylesheet.href = 'dark.css'
        }
    })
}
