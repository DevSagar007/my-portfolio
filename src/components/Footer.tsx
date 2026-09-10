import CurrentYear from '@/components/CurrentYear';

export default function Footer() {
  return (
    <footer className="pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <p className="fz-13">
                &copy; <CurrentYear initialYear={new Date().getFullYear()} /> Sagor Hossen. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
