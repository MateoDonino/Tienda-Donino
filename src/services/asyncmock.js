const products = [
	{
		id: 1,
		title: "Memoria Ram Kingston Fury 8GB 3200Mhz Renegade",
		price: 8500,
		brand: "Kingston",
		category: "memoriasram",
		stock: "6",
		picUrl:
			"https://spacegamer.com.ar/img/Public/1058-producto-concepto-6145205-3757.jpg",
	},
	{
		id: 2,
		title: "Monitor Lg 24 144Hz - 24Gl600F-B",
		price: 46990,
		brand: "Lg",
		category: "monitores",
		stock: "8",
		picUrl:
			"https://mexx-img-2019.s3.amazonaws.com/36146_3.jpeg",
	},
	{
		id: 3,
		title: "Monitor Redragon Ruby 24 165Hz",
		price: 47990,
		brand: "Reddragon",
		category: "monitores",
		stock: "4",
		picUrl:
			"https://spacegamer.com.ar/img/Public/1058-producto-ec6d01132836b98c1b11b4e06a08b2fe-product-9039.jpg",
	},
	{
		id: 4,
		title: "Placa de video Colorful iGame GeForce RTX 3070 Ultra W OC-V",
		price: 189990,
		brand: "GeForce RTX",
		category: "placasdevideo",
		stock: "6",
		picUrl:
			"https://spacegamer.com.ar/img/Public/1058-producto-1c-1373.jpg",
	},
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}
