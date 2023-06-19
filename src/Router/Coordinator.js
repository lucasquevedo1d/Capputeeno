export const goToLogin = (navigate) =>{
    return navigate("/login")
} 

export const goToRegister = (navigate) =>{
    return navigate("/register")
} 

export const goToHomePage = (navigate) =>{
    return navigate("/")
} 

export const goToCart = (navigate) =>{
    return navigate("/cart")
} 


export const goToProductListCategory = (navigate, category) =>{
    return navigate(`/productList/${category}`)
} 

export const goToProductDetail = (navigate, id) =>{
    return navigate(`/productDetail/${id}`)
} 

