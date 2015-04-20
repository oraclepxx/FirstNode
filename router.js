/**
 * Created by xpan on 4/18/15.
 */

function route(handle, pathname, resp) {
    if (typeof handle[pathname] == 'function') {
        handle[pathname](resp);
    } else {
        errorHandler(resp);
    }

}

function errorHandler(response) {
    response.write("404 Not found");
    response.end;
}


exports.route = route;
