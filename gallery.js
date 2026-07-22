// Image Preview

const images = document.querySelectorAll(".gallery img");

images.forEach((img)=>{
    img.addEventListener("click",function(){

        const preview=document.createElement("div");

        preview.classList.add("preview");

        preview.innerHTML=`
        <div class="preview-box">
            <span class="close">&times;</span>
            <img src="${this.src}">
        </div>
        `;

        document.body.appendChild(preview);

        preview.querySelector(".close").onclick=function(){
            preview.remove();
        }

    });
});
