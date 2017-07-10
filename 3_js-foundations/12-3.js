var navList, firstItem, link;

navList = $('.nav-list');

firstItem = navList.chidren().first();
link = firstItem.find('a');

link.attr('href', '#1');