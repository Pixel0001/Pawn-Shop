import { useParams, useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import { useEffect, useState, useMemo } from "react"
import CircularProgress from '@mui/material/CircularProgress';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Rating from '@mui/material/Rating';
import Feedback from "./feedback";

export default function Product(){
  const [values, setValues] = useState([]);
  const navigate = useNavigate();
  const { id: idParam } = useParams();
  const [id, setId] = useState(Number(idParam));
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigate(`/products/${id}`, { replace: true });
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        const ratings = (data.reviews ?? []).map(r => r.rating);
        setValues(ratings);
      })
      .catch(err => setError(err?.message || "Unknown error"))
      .finally(() => setLoading(false));
  }, [id, navigate]);

  const discountedPrice = useMemo(() => {
    if (!product) return 0;
    return product.price * (1 - product.discountPercentage / 100);
  }, [product]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-[var(--primary-color)]">
      <CircularProgress />
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center h-screen bg-[var(--primary-color)] text-[var(--text-color)]">
      <p>Error: {error}</p>
    </div>
  );

  return (
    <>
      <Nav />
      <div className="bg-[var(--primary-color)] w-full pt-[100px]">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2">
              <NavigateBeforeIcon
                className="cursor-pointer text-[var(--text-color)] hover:bg-gray-400/30 active:bg-gray-600/30 rounded-full"
                fontSize="large"
                onClick={() => setId(v => Math.max(1, v - 1))}
              />
              <img
                className="md:w-full w-65 max-w-md aspect-square rounded-xl bg-[var(--bg-color)]"
                src={product.images?.[0]}
                alt={product.title}
              />
              <NavigateNextIcon
                className="cursor-pointer text-[var(--text-color)] hover:bg-gray-400/30 active:bg-gray-600/30 rounded-full"
                fontSize="large"
                onClick={() => setId(v => v + 1)}
              />
            </div>

          </div>
          <div className="flex flex-col items-center text-center lg:order-2">
            <h1 className="text-5xl font-bold mb-3 text-[var(--text-color)]">
                {product.title}
            </h1>
            <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 my-4">
                <span className="line-through text-3xl text-[var(--text-muted)]">
                {product.price.toFixed(2)} $
                </span>
                <span className="px-2 py-0.5 bg-red-500 text-xl rounded-xl font-bold text-white text-sm">
                −{product.discountPercentage}%
                </span>
            </div>
            <p className="text-5xl my-4 font-extrabold text-[var(--text-color)]">
                {discountedPrice.toFixed(2)} $
            </p>
            </div>
            <p className="max-w-prose mt-4 mb-8 text-xl text-[var(--text-muted)]">
            {product.description}
            </p>
        </div>
          <div className="flex flex-col gap-8 row-span-2  h-full items-center justify-center lg:order-1">
            <div className="text-center">
              <h2 className="text-2xl text-[var(--text-color)] mb-4 font-bold">Dimensions</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <h3 className="text-[var(--text-color)] text-lg">
                  Width: {product.dimensions?.width} cm
                </h3>
                <h3 className="text-[var(--text-color)] text-lg">
                  Height: {product.dimensions?.height} cm
                </h3>
                <h3 className="text-[var(--text-color)] text-lg">
                  Depth: {product.dimensions?.depth} cm
                </h3>
              </div>
            </div>

            <div className="w-[60%] md:w-full">
              {(product.reviews?.length ?? 0) > 0 ? (
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">Reviews</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
                    {product.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="border p-4 rounded-lg bg-[var(--bg-color)] text-[var(--text-color)] w-full"
                      >
                        <p className="font-bold mb-1">{review.user}</p>
                        <Rating name="read-only" value={values[index]} readOnly />
                        <p className="mt-2 text-sm text-[var(--text-muted)]">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-[var(--text-muted)] text-center">No reviews available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Feedback />
      <Footer />
    </>
  );
}
