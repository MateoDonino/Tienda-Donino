const products = [
	{
		id: 1,
		title: "Memoria Ram Kingston Fury 8GB 3200Mhz Renegade",
		price: 8500,
		brand: "Kingston",
		description: "El ultrarrápido FURY ™ Renegade DDR4 RGB 1 es la actualización perfecta para el jugador que quiere un rendimiento de vanguardia y un estilo RGB brillante en su sistema basado en AMD o Intel. Los efectos de iluminación RGB dinámicos utilizan la tecnología patentada Infrared Sync Technology ™ de Kingston FURY para proporcionar efectos de iluminación suaves y sincronizados.",
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
		description: "Este monitor de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido",
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
		description: "El Ruby es un monitor gamer de 23,8 pulgadas construido para entregar una experiencia visual de calidad, con toda la potencia de color y movimiento que merecen los mejores juegos. Simple, delgado, elegante y confiable, está listo para la acción.",
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
		description: "Velocidad en cada lectura. Cuenta con 5888 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos.",
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
