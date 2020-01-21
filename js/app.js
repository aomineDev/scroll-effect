const skewed = document.querySelector('.skewed')
window.addEventListener('scroll', () => {
	console.log(window.scrollY)
	const value = - 10 + window.scrollY/60
	skewed.style.transform = `skewY(${value}deg)`
})