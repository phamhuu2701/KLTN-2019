module.exports.createTimeAuto = (y1, y2) => {
    let time = new Date();
    let y = Math.floor(Math.random() * (y2 - y1 + 1)) + y1;
    let m = Math.floor(Math.random() * 12) + 1;
    if (m < 10) {
        m = "0" + m;
    }
    let d = Math.floor(Math.random() * 28) + 1;
    if (d < 10) {
        d = "0" + d;
    }

    time.setYear(y);
    time.setMonth(m);
    time.setDate(d);

    // console.log(time);
    return time;
}
