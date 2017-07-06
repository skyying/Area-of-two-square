/**
 * Created by liuchien-wen on 02/07/2017.
 */



function solution(K, L, M, N, P, Q, R, S) {

    var r1C = [K, L, M, N];
    var r2C = [P, Q, R, S];


    if(K>P){
        K=r2C[0]; L=r2C[1]; M=r2C[2]; N=r2C[3];
        P=r1C[0]; Q=r1C[1]; R=r1C[2]; S=r1C[3];
    }

    var r1Height = N-L;
    var r1Width = M-K;
    var r1Area = r1Height * r1Width;

    var r2Height = S-Q;
    var r2Width = R-P;
    var r2Area = r2Height * r2Width;

    var isIntersect = P<=M && P>=K && S<=N && S >= L;

    var intersectWidth = M-P;
    var intersectHeight = S-L;
    var intersectArea = intersectWidth*intersectHeight;
    var area = isIntersect ? r1Area + r2Area - intersectArea : r1Area + r2Area;

    return area >= 2147483647 ? -1 : area

}


