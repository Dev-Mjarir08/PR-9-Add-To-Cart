let bas_url = window.location.href;
let preFix ="";
if (bas_url.includes("index")){
    preFix = "./assets/pages/"
}
    else{
        preFix=""
    }

    let nav =`
       <nav class="navbar navbar-expand-lg bg-white border-bottom p-3">
        <div class="container">
            <a class="navbar-brand" href="/index.html"><img src="/assets/media/images/nike-seeklogo.png" width="70" alt="Nike Logo"></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="nav">
                <ul class="navbar-nav mx-auto">

                    <li class="nav-item">
                        <a class="nav-link fw-semibold active" href="/index.html">Home</a>

                        <!-- Mega Menu -->
                        <div class="mega-menu">
                            <div class="row">

                                <div class="col-3">
                                    <h6>Featured</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">New Drops</a></li>
                                        <li><a href="#">New Arrivals</a></li>
                                        <li><a href="#">Bestsellers</a></li>
                                        <li><a href="#">Nike By You</a></li>
                                        <li><a href="#">Jordan</a></li>
                                        <li><a href="#">LeBron James</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Trending</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">More Colours & Running</a></li>
                                        <li><a href="#">Vomero Premium</a></li>
                                        <li><a href="#">What's Trending</a></li>
                                        <li><a href="#">24.7 Collection</a></li>
                                        <li><a href="#">Retro Running</a></li>
                                        <li><a href="#">Running Shoe Finder</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop Icons</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Air Force 1</a></li>
                                        <li><a href="#">Air Jordan 1</a></li>
                                        <li><a href="#">Air Max</a></li>
                                        <li><a href="#">Dunk</a></li>
                                        <li><a href="#">Cortez</a></li>
                                        <li><a href="#">Blazer</a></li>
                                        <li><a href="#">Pegasus</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop By Sport</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Running</a></li>
                                        <li><a href="#">Basketball</a></li>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">Tennis</a></li>
                                        <li><a href="#">Gym</a></li>
                                        <li><a href="#">Yoga</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>

                    <li class="nav-item"><a class="nav-link fw-semibold" href="#">Men</a>
                        <div class="mega-menu">
                            <div class="row">

                                <div class="col-3">
                                    <h6>Featured</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">New Drops</a></li>
                                        <li><a href="#">New Arrivals</a></li>
                                        <li><a href="#">Bestsellers</a></li>
                                        <li><a href="#">Nike By You</a></li>
                                        <li><a href="#">Jordan</a></li>
                                        <li><a href="#">LeBron James</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Trending</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">More Colours & Running</a></li>
                                        <li><a href="#">Vomero Premium</a></li>
                                        <li><a href="#">What's Trending</a></li>
                                        <li><a href="#">24.7 Collection</a></li>
                                        <li><a href="#">Retro Running</a></li>
                                        <li><a href="#">Running Shoe Finder</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop Icons</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Air Force 1</a></li>
                                        <li><a href="#">Air Jordan 1</a></li>
                                        <li><a href="#">Air Max</a></li>
                                        <li><a href="#">Dunk</a></li>
                                        <li><a href="#">Cortez</a></li>
                                        <li><a href="#">Blazer</a></li>
                                        <li><a href="#">Pegasus</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop By Sport</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Running</a></li>
                                        <li><a href="#">Basketball</a></li>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">Tennis</a></li>
                                        <li><a href="#">Gym</a></li>
                                        <li><a href="#">Yoga</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link fw-semibold" href="#">Women</a>
                        <div class="mega-menu">
                            <div class="row">

                                <div class="col-3">
                                    <h6>Featured</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">New Drops</a></li>
                                        <li><a href="#">New Arrivals</a></li>
                                        <li><a href="#">Bestsellers</a></li>
                                        <li><a href="#">Nike By You</a></li>
                                        <li><a href="#">Jordan</a></li>
                                        <li><a href="#">LeBron James</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Trending</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">More Colours & Running</a></li>
                                        <li><a href="#">Vomero Premium</a></li>
                                        <li><a href="#">What's Trending</a></li>
                                        <li><a href="#">24.7 Collection</a></li>
                                        <li><a href="#">Retro Running</a></li>
                                        <li><a href="#">Running Shoe Finder</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop Icons</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Air Force 1</a></li>
                                        <li><a href="#">Air Jordan 1</a></li>
                                        <li><a href="#">Air Max</a></li>
                                        <li><a href="#">Dunk</a></li>
                                        <li><a href="#">Cortez</a></li>
                                        <li><a href="#">Blazer</a></li>
                                        <li><a href="#">Pegasus</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop By Sport</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Running</a></li>
                                        <li><a href="#">Basketball</a></li>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">Tennis</a></li>
                                        <li><a href="#">Gym</a></li>
                                        <li><a href="#">Yoga</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link fw-semibold" href="#">Kids</a>
                        <div class="mega-menu">
                            <div class="row">

                                <div class="col-3">
                                    <h6>Featured</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">New Drops</a></li>
                                        <li><a href="#">New Arrivals</a></li>
                                        <li><a href="#">Bestsellers</a></li>
                                        <li><a href="#">Nike By You</a></li>
                                        <li><a href="#">Jordan</a></li>
                                        <li><a href="#">LeBron James</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Trending</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">More Colours & Running</a></li>
                                        <li><a href="#">Vomero Premium</a></li>
                                        <li><a href="#">What's Trending</a></li>
                                        <li><a href="#">24.7 Collection</a></li>
                                        <li><a href="#">Retro Running</a></li>
                                        <li><a href="#">Running Shoe Finder</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop Icons</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Air Force 1</a></li>
                                        <li><a href="#">Air Jordan 1</a></li>
                                        <li><a href="#">Air Max</a></li>
                                        <li><a href="#">Dunk</a></li>
                                        <li><a href="#">Cortez</a></li>
                                        <li><a href="#">Blazer</a></li>
                                        <li><a href="#">Pegasus</a></li>
                                    </ul>
                                </div>

                                <div class="col-3">
                                    <h6>Shop By Sport</h6>
                                    <ul class="list-unstyled">
                                        <li><a href="#">Running</a></li>
                                        <li><a href="#">Basketball</a></li>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">Tennis</a></li>
                                        <li><a href="#">Gym</a></li>
                                        <li><a href="#">Yoga</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li class="nav-item"><a class="nav-link fw-semibold link-danger" href="${preFix}editProduct.html">Edit Product</a></li>
                    <li class="nav-item"><a class="nav-link fw-semibold link-danger"  href="${preFix}addProduct.html">Add Product</a></li>
                    <li class="nav-item"><a class="nav-link fw-semibold link-danger"  href="${preFix}viewProduct.html">View Product</a></li
                    <li class="nav-item alig">
                    <a class="nav-link fw-semibold " href="${preFix}cart.html">
                    <i class="bi bi-bag-heart-fill btn btn-outline"></i>
                    </a>
                    </li>
                </ul>

                <form class="d-flex">
                    <input class="form-control rounded-pill" placeholder="Search">
                </form>
            </div>
        </div>
    </nav>
    `
    const header = document.querySelector('header').innerHTML = nav;
    export default header;






    