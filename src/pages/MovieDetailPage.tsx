import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailTemplate from '../components/template/MovieDetailTemplate';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { PutRating, PutRatingProps } from '../api/ratingFetcher';
import { useRating } from '../hooks/useRating';
import { useReview } from '../hooks/useReview';
import { SelectOption } from '../components/molecules/SelectFilter';
import { DeleteReview } from '../api/reviewFetcher';
import { PostMovieLike, PostReviewLike, ReviewProps } from '../api/likeFetcher';

const MovieDetailPage = () => {
  const params = useParams<{ id: string }>();
  const movieId = params.id || '';
  const [orderby, setOrderby] = useState<SelectOption>('latest');

  const { isRatingLoading, ratingState } = useRating(movieId);
  const { isMovieDetailLoading, movieDetailState } = useMovieDetail(movieId);
  const { isReviewLoading, reviewState } = useReview({ movieId, orderby });
  const [score, setScore] = useState<number>(ratingState?.data || 0);

  useEffect(() => {
    if (ratingState !== undefined) {
      setScore(ratingState.data);
    }
  }, [ratingState]);

  const handleMovieHeartClick = async (movieId: number) => {
    const res = await PostMovieLike({ movieId });
  };

  const handleReviewHeartClick = async ({ movieId, reviewId }: ReviewProps) => {
    const res = await PostReviewLike({ movieId, reviewId });
  };

  const handleRatingClick = ({ movieId, rating }: PutRatingProps) => {
    PutRating({ movieId, rating });
  };

  const handleDeleteClick = async (movieId: number) => {
    const res = await DeleteReview(movieId);
    alert(res?.message);
  };

  if (isMovieDetailLoading || isRatingLoading || isReviewLoading) {
    return <div>Loding...</div>;
  }
  if (!movieDetailState || !ratingState || !reviewState) {
    return null;
  }

  return (
    movieDetailState?.data && (
      <MovieDetailTemplate
        score={score}
        setScore={setScore}
        orderby={orderby}
        setOrderby={setOrderby}
        reviewState={reviewState.data}
        movie={movieDetailState?.data.movie}
        credit={movieDetailState?.data.credit}
        onMovieHeartClick={handleMovieHeartClick}
        onRatingClick={handleRatingClick}
        onDeleteClick={handleDeleteClick}
        onReviewHeartClick={handleReviewHeartClick}
      />
    )
  );
};

export default MovieDetailPage;
