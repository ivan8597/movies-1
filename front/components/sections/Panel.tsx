import { useRouter, useSearchParams } from "next/navigation";
const genres: string[] = [
  "Mystery",
  "Romance",
  "Biography",
  "Comedy",
  "Drama",
  "History",
  "Family",
  "Sport",
  "Animation",
  "Music",
  "Short",
  "Documentary",
  "Adventure",
  "News",
  "Western",
  "Horror",
  "Fantasy",
  "Musical",
  "War",
  "Thriller",
  "Crime",
  "Sci-Fi",
  "Action",
];
// const directors: string[] = []
const years: number[] = [];

for (let i = 1900; i <= 2016; i++) {
  years.push(i);
}
const ratings: number[] = [];
for (let i = 1; i <= 9; i++) {
  ratings.push(i);
}
type UrlParams = {
  year: string | null;
  genre: string | null;
  rating: string | null;
};
const PanelSection = () => {
  const searchParams = useSearchParams();
  const year = searchParams.get("year");
  const genre = searchParams.get("genre");
  const rating = searchParams.get("rating");
  const router = useRouter();
  const getUrl = ({ year, genre, rating }: UrlParams) => {
    let url = "/?";
    if (year) {
      url += `year=${year}&`;
    }
    if (genre) {
      url += `genre=${genre}&`;
    }
    if (rating) {
      url += `rating=${rating}&`;
    }
    return url;
  };
  return (
    <div className="section-pannel">
      <div className="grid row">
        <div className="col-md-10">
          <form autoComplete="off">
            <div className="row form-grid">
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="genre"
                    onChange={(e) => {
                      // router.push(`/?genre=${e.target.value}`)
                      router.push(
                        getUrl({
                          year,
                          genre: e.target.value,
                          rating,
                        })
                      );
                    }}
                  >
                    <option>genre</option>
                    {genres.map((genre) => {
                      return (
                        <option value={genre} key={genre}>
                          {genre.toLowerCase()}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="release year"
                    onChange={(e) => {
                      // router.push(`/?year=${e.target.value}`);
                      router.push(
                        getUrl({
                          year: e.target.value,
                          genre,
                          rating,
                        })
                      );
                    }}
                  >
                    <option>release year</option>
                    {years.map((year) => {
                      return (
                        <option value={year} key={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="input-view-flat input-group">
                  <select
                    className="form-control"
                    name="rating"
                    onChange={(e) => {
                      // router.push(`/?rating=${e.target.value}`);
                      router.push(
                        getUrl({
                          year,
                          genre,
                          rating: e.target.value,
                        })
                      );
                    }}
                  >
                    <option>rating</option>
                    {ratings.map((rating) => {
                      return (
                        <option value={rating} key={rating}>
                          {rating}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
