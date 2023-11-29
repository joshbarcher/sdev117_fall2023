window.onload = async () => {
    let url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=acur";
    let config = {
        method: "get",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "cab8736c-d9ae-481e-8e20-4fe581"
        }
    };

    let response = await fetch(url, config);
    let data = await response.json();
    showCats(data);
};

function showCats(cats)
{
    let ul = document.querySelector("#images");
    for (let i = 0; i < cats.length; i++)
    {
        let cat = cats[i];
        let url = cat.url;

        let li = document.createElement("li");
        let anchor = document.createElement("a");
        let img = document.createElement("img");

        anchor.href = url;
        img.src = url;

        anchor.appendChild(img);
        li.appendChild(anchor);
        ul.appendChild(li);
    }
}