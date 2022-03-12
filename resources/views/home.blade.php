@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ __('Dashboard20220311') }}</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif

                        <ul>
                            @canany('viewAny', auth()->user())
                                <li><a href="./users">社員一覧
                                    </a></li>
                                 <li><a href="./users/create">　社員・新規登録
                                    </a></li>
                            @endcanany
                            <li><a href="./roles">役職一覧(vue.js)</a></li>
                            <li><a href="./rolebases">役職一覧(laravel)</a></li>
                            <li><a href="./roles/create">　役職・新規登録(vue.js)</a></li>
                            <li><a href="./customers">顧客一覧</a></li>
                            <li><a href="./customers/create">　顧客新規登録</a></li>
                            <li><a href="./customer_search">顧客検索</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
