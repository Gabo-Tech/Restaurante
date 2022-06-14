export default function Footer() {
  return (
    <div id="footer">
      <div>
        <div className="connect">
          <a href="https://github.com/Gabo-Tech" className="facebook">
            facebook
          </a>
          <a href="https://github.com/Gabo-Tech" className="twitter">
            twitter
          </a>
          <a href="https://github.com/Gabo-Tech" className="googleplus">
            googleplus
          </a>
          <a href="https://github.com/Gabo-Tech" className="pinterest">
            pinterest
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Freeeze. All Rights Reserved.</p>
      </div>
    </div>
  );
}
