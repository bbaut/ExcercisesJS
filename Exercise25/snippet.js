function log (v){
    if (v) {
        console.log('ok');
    }
    else {
        console.log ('no');
    }
}

log(true);
// ok: because v takes a boolean value of true

log(false);
// no: because v takes a boolean value of false

log('true');
// ok

log('false');
// ok

log({});
// ok: because every object is truthy

log([]);
// ok: because every object is truthy

log(NaN);
// no: because NaN is falsy

log(0)
// no: because 0 is falsy

log(1);
// ok: because 1 is truthy

log(undefined);
// no: because undefined is falsy

log(null);
// no: because null is falsy