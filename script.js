function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    sidebar.style.right = '0';
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-100%';
}
