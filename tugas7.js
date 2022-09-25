$(document).ready(function(){
    $(".card").each(function(){
        $(this).click(function(){
            let binatang = $(this).find("h2").attr("id")
            $('#sound').remove();
            $('#gambar').remove();
            $(this).find('img').attr({src:""});
            if(binatang == "hantu"){
                $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/17816_5-fakta-seputar-burung-hantu.jpg" alt="">`);
                $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-burung-hantu.mp3" id="suara" autoplay></audio>`);

            }else if (binatang == "sapi"){
                $(this).prepend(`<img class="card-img-top" id="gambar" src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg" alt="">`);
                $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-sapi-hewan-ternak-iburung-com.mp3" id="suara" autoplay></audio>`);

            }else if (binatang == "kambing"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://disnakkan.grobogan.go.id/images/kambing_pygmy.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-kambing-mengembik.mp3" id="suara" autoplay></audio>`);
       
        }else if (binatang == "kuda"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://akcdn.detik.net.id/visual/2016/02/19/74990601-4c0c-4cc7-bda0-32df5c9abcb5_169.jpg?w=650" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-kuda-meringkik.mp3" id="suara" autoplay></audio>`);

        }else if (binatang == "babi"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://static.republika.co.id/uploads/images/inpicture_slide/babi-ngepet-ilustrasi-_121210161131-943.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-babi.mp3" id="suara" autoplay></audio>`);

        }else if (binatang == "singa"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/2158_singa.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-singa-betina-menggeram.mp3" id="suara" autoplay></audio>`);

        }else if (binatang == "ayam"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://cdn1-production-images-kly.akamaized.net/KRNLG-nlXfMOyonZfkDkLEYidNg=/0x204:1799x1218/640x360/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3195933/original/094731700_1596206149-Ilustrasi_ayam_2.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-ayam-jao-berkokok.mp3" id="suara" autoplay></audio>`);

        }else if (binatang == "macan"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUN1Xf0sg_f8rhI5UOL1TdPqaQCicxqIsSmQ&usqp=CAU" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-hewan-macan-menggeram.mp3" id="suara" autoplay></audio>`);
       
 }else if (binatang == "gajah"){
            $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset.kompas.com/crops/XCpZ0glZwpZTsxx3tHqH9O5iKBY=/0x0:762x508/780x390/data/photo/2019/02/23/1973281050.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-gajah-mengaum-panjang.mp3" id="suara" autoplay></audio>`);
       
 }else if (binatang == "burung"){
 $(this).prepend(`<img class="card-img-top" id="gambar" src="https://aws-images-prod.sindonews.net/dyn/600/pena/sindo-article/original/2022/02/15/Bluebird.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-burung-burung-camar.mp3" id="suara" autoplay></audio>`);
          
}else if (binatang == "bebek"){
 $(this).prepend(`<img class="card-img-top" id="gambar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/White_domesticated_duck%2C_stretching.jpg/1200px-White_domesticated_duck%2C_stretching.jpg" alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-bebek.mp3" id="suara" autoplay></audio>`);
          
        }else { 
 $(this).prepend(`<img class="card-img-top" id="gambar" src="https://asset.kompas.com/crops/irO4XUVJaJ0QmdvD4zkNo-YSx18=/192x128:1728x1152/750x500/data/photo/2021/12/04/61ab9370d9dc7.jpg " alt="">`);
            $(this).append(`<audio src="https://simomot.com/wp-content/uploads/2014/11/suara-gonggongan-anjing-berulang.mp3" id="suara" autoplay></audio>`);
       
           


        }

        });
    });
});