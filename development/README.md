Organization of Components:
My website includes 3 main components: FilteredList, FoodCards, and Cart which are all handled (indirectly)
by App. My App renders a FilteredList, which takes care of displaying and using the filters and sort options.
Under these options, FilteredList also renders a FoodCard for each food item. A FoodCard includes the picture of the item, the name, course type, price, spiciness level, and an order button. Finally, FoodCards renders the Cart, which includes the list items for every added item.


How Data is Passed down Through Components:
Data is primarily passed through as props. App first passes the initialized foodList to FilteredList. After all filters and sorting algorithms have been applied, FilteredList passes this new list to FoodCards so that it only 
renders cards for the relevant items. Then, since the items that are added to the Cart rely on the what FoodCards' Order button were pressed, the Cart passes a list of the selected item and their total to the Cart. However. since the Cart component has the delete button, it needs a way to update FoodCards' state for total and cart. Thus, I passed setCartState() to Cart to allow Cart to update the FoodCards state. However, since Cart's state is only updated with the props in the constructor, I used a static method getDerivedStateFromProps() to update Cart's state whenever it is different from the list from FoodCards.


How the User Triggers State Changes:
The user triggers state changes when they change the filters or way that the items are sorted, add items to their cart, or delete items from their order.


Image Sources:
https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4016,w_6016,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_321615734_s2kyph.jpg
https://pbs.twimg.com/media/DxirFsNW0AE7w4B.jpg
https://i.ytimg.com/vi/LFlzbfnmsas/maxresdefault.jpg
https://www.foodiecrush.com/wp-content/uploads/2016/08/Korean-Beef-Bulgogi-foodiecrush.com-013.jpg
https://www.koreanbapsang.com/wp-content/uploads/2015/01/DSC_06281-e1422146518897.jpg
https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg
https://www.seriouseats.com/2020/01/20200122-gimbap-vicky-wasik-24.jpg
https://d2wtgwi3o396m5.cloudfront.net/recipe/7c650ba2-8349-4507-ab05-99ef9b1452e0.jpg
https://www.seriouseats.com/2014/03/20200302-tteokbokki-vicky-wasik.jpg
https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg
https://cdn.vox-cdn.com/thumbor/BvOI0AoXwpmeiNCdqLcAz2hXGxw=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/65770130/Chungchun_Rice_Hotdog_facebook.0.jpg
https://i.ytimg.com/vi/KMlESQUqvog/maxresdefault.jpg
https://cdn.pixabay.com/photo/2020/10/25/17/02/fire-5684887_960_720.png
