@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                    
                    <table width="100%">
                    <td style="text-align: left;">役職・新規登録</td>
                    <td style="text-align: right;"><input type="button" onclick="location.href='./home'" value="ホーム"></td>
                    </table>
                    </div>
                    <form action="/roles" method="POST">
                        @csrf
                        <p>役職コード：<input type="text" name="name" value="{{ old('name') }}"></p>
                        <p>役　職　名：<input type="text" name="memo" value="{{ old('memo') }}"></p>
                        <p style="text-align: center"><button class="btn btn-primary" type="submit">　　登　録　　</button></p>
                    </form>

                    {{-- エラーを表示--}}
                    @if( $errors->any() )
                        <ul>
                            @foreach($errors->all() as $error)
                                <li>{{$error}}</li>
                            @endforeach
                        </ul>
                    @endif

                </div>
            </div>
        </div>
    </div>
@endsection
