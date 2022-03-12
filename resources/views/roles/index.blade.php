@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">                   
                        <table width="100%">
                        <td style="text-align: left;">役職一覧 Vue</td>
                        <td style="text-align: right;"><input type="button" onclick="location.href='./home'" value="ホーム"></td>
                        </table>     
                    </div>

                    <div id="app">
                        <role-component></role-component>
                    </div>
 
                </div>
            </div>
        </div>
    </div>
@endsection