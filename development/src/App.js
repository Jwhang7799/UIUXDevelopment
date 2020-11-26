import './App.css';
import { FilteredList } from './FilteredList';

// Initializing foodList with data for each menu item.
// Includes name, course, price, spiciness level, and img source.
const foodList = [
  { name: "Kimbap", course: "Appetizer", price: 5, spiciness: "Not Spicy", img: "https://www.seriouseats.com/2020/01/20200122-gimbap-vicky-wasik-24.jpg"},
  { name: "Chung Chun", course: "Appetizer", price: 3, spiciness: "Not Spicy", img: "https://cdn.vox-cdn.com/thumbor/BvOI0AoXwpmeiNCdqLcAz2hXGxw=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/65770130/Chungchun_Rice_Hotdog_facebook.0.jpg"},
  { name: "Spicy Squid", course: "Appetizer", price: 8, spiciness: "3 Flames", img: "https://i.ytimg.com/vi/LFlzbfnmsas/maxresdefault.jpg"},
  { name: "Tteokbokki", course: "Appetizer", price: 4, spiciness: "2 Flames", img: "https://www.seriouseats.com/2014/03/20200302-tteokbokki-vicky-wasik.jpg"},
  { name: "Bibimbap", course: "Entree", price: 7, spiciness: "Not Spicy", img: "https://recipetineats.com/wp-content/uploads/2019/05/Bibimbap_3.jpg"},
  { name: "Bulgogi", course: "Entree", price: 12, spiciness: "Not Spicy", img: "https://www.foodiecrush.com/wp-content/uploads/2016/08/Korean-Beef-Bulgogi-foodiecrush.com-013.jpg"},
  { name: "Galbi", course: "Entree", price: 15, spiciness: "Not Spicy", img: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_4016,w_6016,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/shutterstock_321615734_s2kyph.jpg"},
  { name: "Pork Belly", course: "Entree", price: 9, spiciness: "Not Spicy", img: "https://pbs.twimg.com/media/DxirFsNW0AE7w4B.jpg"},
  { name: "Fried Chicken", course: "Entree", price: 10, spiciness: "1 Flame", img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/270679.jpg"},
  { name: "Japchae", course: "Side", price: 5, spiciness: "Not Spicy", img: "https://d2wtgwi3o396m5.cloudfront.net/recipe/7c650ba2-8349-4507-ab05-99ef9b1452e0.jpg"},
  { name: "Tempura", course: "Side", price: 3, spiciness: "Not Spicy", img: "https://i.ytimg.com/vi/KMlESQUqvog/maxresdefault.jpg"},
  { name: "Tofu Stew", course: "Side", price: 6, spiciness: "2 Flames", img: "https://www.koreanbapsang.com/wp-content/uploads/2015/01/DSC_06281-e1422146518897.jpg"}, 
]
 
// Simple structure with the title follwed by FilteredList and footer.
// Arranged in a flex-column.
function App() {
  return (
    <span className="body">
      <div className="title">Dangy</div>
      <FilteredList list={foodList} />
      <footer className="footer"></footer>
    </span>
  );
}

export default App;
