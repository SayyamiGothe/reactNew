function Home() {

  const shoppingItems = [
    {
      name: "Wireless Headphones",
      price: 2499,
      image: "https://dummyimage.com/300x300/000/fff&text=Wireless+Headphones"
    },
    {
      name: "Smart Watch",
      price: 3999,
      image: "https://dummyimage.com/300x300/000/fff&text=Smart+Watch"
    }
  ];

  return (
    <>
      {shoppingItems.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <img src={item.image} height={100} alt={item.name} />
          <h6>Price: ₹{item.price}</h6>
        </div>
      ))}
    </>
  );
}

export default Home;