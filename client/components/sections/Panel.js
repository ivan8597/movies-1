import {useRouter} from "next/router"

    const genres= ["Mystery", "Romance", "Biography", "Comedy", "Drama", "History", "Family", "Sport", "Animation", "Music", "Short", "Documentary", "Adventure", "News", "Western", "Horror", "Fantasy", "Musical", "War", "Thriller", "Crime", "Sci-Fi", "Action"]
    const years=[]
    for(let i=1900;i<=2016;i++){
      years.push(i)
    }
const PanelSection  = () => {
const router=useRouter()
  return (
    <div className="section-pannel">
  <div className="grid row">
    <div className="col-md-10">
      <form autoComplete="off">
        <div className="row form-grid">
          <div className="col-sm-6 col-lg-3">
            <div className="input-view-flat input-group">
              <select className="form-control" name="genre" onChange={(e)=>{
router.push(`/?genre=${e.target.value}`)
              }}>
                <option selected="true">genre</option>
                {genres.map((genre)=>{
 return <option value={genre} key={genre}>{genre.toLowerCase()}</option>
                })}
              </select>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="input-view-flat input-group">
              <select className="form-control" name="release year" onChange={(e)=>{
router.push(`/?year=${e.target.value}`)}}>
                <option selected="true">release year</option>
                {years.map((year)=>{
 return <option value={year} key={year}>{year}</option>
                })}
               
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
</div>

  )
}

export default PanelSection