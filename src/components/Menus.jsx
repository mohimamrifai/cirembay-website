import React from 'react'
import './menus.css'
import './menu.css'

const Menus = () => {


  const food = [
    {
      "nama": "indomie",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 12000,
      "img": "img/food/gambar_1.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie rebus",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 10000,
      "img": "img/food/gambar_2.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
    {
      "nama": "indomie telor",
      "deskripsi": "Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.",
      "harga" : 15000,
      "img": "img/food/gambar_3.jpg",
      "pesan": "https://api.whatsapp.com/send?phone=6285624355323&text=Halooo%20admin%20cirembay%20!!!%0Asaya%20mau%20order%20%3A)%0A%0ANama%20pemesan%20%3A%0ANama%20Produk%20%3A%20*Cirembay*%0AJumlah%20Produk%20%3A%0AKeterangan%20(opsional)%20%3A"
    },
  ]
  return <>
    <div className='container-menus'>
      {food.map((f, index )=> (
        <div className='menu' key={index}>
        <img  src={f.img} />
          <h3>{f.nama.toUpperCase()}</h3>
          <p>{f.deskripsi}</p>
          <h3 className="harga">Rp. {f.harga}</h3>
          <a href={f.pesan} target="_blank" className='btn-pesan'>Pesan Sekarang</a>
        </div>
      ))}
    </div>
  </>
}

export default Menus
