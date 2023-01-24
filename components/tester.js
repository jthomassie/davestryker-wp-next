// components/tester.js

const Tester = () => {
  const str =
    '<div class="row"><div class="col-12"><h5 class="show-date">Jan. 27-28 at 7:30 pm / 9:00 pm</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue"><a  href="https://www.smallslive.com/" target="_blank">Smalls NYC</a></h5><p>183 West 10th Street &#8211; basement<br>New York City, NY</p></div><div class="col-6 col-sm-7 col-md-8"><h4>Dave Stryker Trio</h4><p>Dave Stryker &#8211; guitar<br>Jared Gold &#8211; organ<br>McClenty Hunter &#8211; drums</p></div><div class="col-12"><hr></div></div><div class="row"><div class="col-12"><h5 class="show-date">Feb. 4 at 7:00 pm / 9:00 pm</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue"><a  href="https://www.shanghaijazz.com/" target="_blank">Shanghai Jazz</a></h5><p>24 Main Street<br>Madison, NJ</p></div><div class="col-6 col-sm-7 col-md-8"><h4>Dave Stryker Trio</h4><p>Dave Stryker &#8211; guitar<br>Pat Bianchi &#8211; organ<br>McClenty Hunter &#8211; drums</p></div><div class="col-12"><hr></div></div><div class="row"><div class="col-12"><h5 class="show-date">March 4 at 7:00 pm / 9:00 pm</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue"><a  href="https://scullersjazz.com/" target="_blank">Scullers</a></h5><p>Double Tree Hotel<br>Cambridge, MA</p></div><div class="col-6 col-sm-7 col-md-8"><h4>Dave Stryker Trio w/ Walter Smith III</h4><p>Dave Stryker &#8211; guitar<br>Jared Gold &#8211; organ<br>McClenty Hunter &#8211; drums<br>Walter Smith III &#8211; tenor</p></div><div class="col-12"><hr></div></div><div class="row"><div class="col-12"><h5 class="show-date">March 17 at 7:00 pm / 9:00 pm</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue"><a  href="https://www.shanghaijazz.com/" target="_blank">Shanghai Jazz</a></h5><p>24 Main Street<br>Madison, NJ</p></div><div class="col-6 col-sm-7 col-md-8"><h4>Dave Stryker Trio</h4><p>Dave Stryker &#8211; guitar<br>Jared Gold &#8211; organ<br>McClenty Hunter &#8211; drums</p></div><div class="col-12"><hr></div></div><div class="row"><div class="col-12"><h5 class="show-date">April 7-8 at 7:00 pm / 9:15 pm<br>April 9 at 5:00 pm / 7:30 pm</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue"><a  href="https://www.keystonekornerbaltimore.com/" target="_blank">Keystone Korner</a></h5><p>1350 Lancaster Street<br>Baltimore, MD<br>410-946-6726</p></div><div class="col-6 col-sm-7 col-md-8"><h4>Dave Stryker Trio w/ Warren Wolf</h4><p>Dave Stryker &#8211; guitar<br>Jared Gold &#8211; organ<br>McClenty Hunter &#8211; drums<br>Warren Wolf &#8211; vibes</p></div><div class="col-12"><hr></div></div>';

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex mt-3 mb-5">{str}</div>
        </div>
      </div>
    </>
  );
};

export default Tester;
